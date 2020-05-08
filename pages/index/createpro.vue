<template>
  <div v-loading.fullscreen="loading" class="indexpage">
    <h1 class="pagetitle">
      项目立项申请
    </h1>
    <div class="pagetip">
      <div class="btns">
        <div class="submitbtn" @click="tocreate">发起立项申请</div>
      </div>
      <p>
        注意 *：
        1、项目所有完成单位（包括申报单位和合作单位）都须在本系统中进行注册，未注册单位不能作为项目完成单位。<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        2、申报书成功提交后，请下载打印申报书及附件（全部材料原件和复印件1式1份），并加盖申报单位和合作单位公章后送审初审单位。
      </p>
    </div>
    <div class="probox">
      <p class="pagetitle">项目立项</p>
      <div class="filters">
        <el-select
          v-model="prostate"
          clearable
          placeholder="请选择项目申报状态"
        >
          <el-option label="全部" value="0">全部</el-option>
          <el-option
            v-for="item in prostates"
            :key="item.id"
            :label="item.name"
            :value="item.id"
          ></el-option>
        </el-select>
        <div class="searchbox">
          <input
            v-model="word"
            type="text"
            placeholder="请输入项目编号或名称查询"
          />
          <div v-if="word" class="clearbtn" @click="clearall">
            ×
          </div>
          <i class="iconfont" @click="search">&#xe619;</i>
        </div>
      </div>
      <div class="listbox">
        <div class="listhead">
          <p class="col1">序号</p>
          <p class="col2">项目编号</p>
          <p class="col3">项目名称</p>
          <p class="col9">项目类别</p>
          <p class="col4">起始日期</p>
          <p class="col5">截止日期</p>
          <p class="col6">申报状态</p>
          <p class="col7">添加时间</p>
          <p class="col8">操作</p>
        </div>
        <div v-for="item in projects" :key="item.id" class="listItem">
          <p class="col1" :title="item.k ? item.k : '-'">
            {{ item.k ? item.k : '-' }}
          </p>
          <p class="col2" :title="item.sn ? item.sn : '-'">
            {{ item.sn ? item.sn : '-' }}
          </p>
          <p class="col3" :title="item.name ? item.name : '-'">
            {{ item.name ? item.name : '-' }}
          </p>
          <p class="col9" :title="item.typeName ? item.typeName : '-'">
            {{ item.typeName ? item.typeName : '-' }}
          </p>
          <p class="col4" :title="item.starttime ? item.starttime : '-'">
            {{ item.starttime ? item.starttime : '-' }}
          </p>
          <p class="col5" :title="item.endtime ? item.endtime : '-'">
            {{ item.endtime ? item.endtime : '-' }}
          </p>
          <p
            :class="
              !item.statusType
                ? 'col6'
                : item.statusType == '1'
                ? 'col6 green'
                : item.statusType == '2'
                ? 'col6 red'
                : item.statusType == '3'
                ? 'col6 grey'
                : item.statusType == '4'
                ? 'col6 blue'
                : 'col6'
            "
            :title="item.statusName ? item.statusName : '-'"
          >
            {{ item.statusName ? item.statusName : '-' }}
          </p>
          <p class="col7" :title="item.addtime ? item.addtime : '-'">
            {{ item.addtime ? item.addtime : '-' }}
          </p>
          <p class="col8">
            <span v-if="item.isedit == '1'" @click="edit(item.id)">
              编辑
            </span>
            <span @click="details(item.id)">
              查看
            </span>
            <span v-if="item.isdel == '1'" @click="delpro(item.id)">
              删除
            </span>
            <span></span>
          </p>
        </div>
      </div>
      <div v-if="projects.length === 0" class="nodata">
        暂时没有内容！
      </div>
      <div class="paging">
        <el-pagination
          layout="total, prev, pager, next"
          :page-size="8"
          :hide-on-single-page="false"
          :total="pagetotal"
          @current-change="pagechange"
        >
        </el-pagination>
      </div>
    </div>
    <el-dialog
      :visible.sync="dialogshow"
      title="立项申请详情"
      :close-on-click-modal="false"
      :lock-scroll="false"
      :show-close="false"
      width="1000px"
    >
      <detail :ids="Number(detailid)" />
      <span slot="footer" class="dialog-footer">
        <!-- <el-button @click="cancel2">取消</el-button> -->
        <el-button type="primary" @click="sure">确定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import { datawork } from '../../plugins/datawork'
import { getClientId } from '../../plugins/getclientid'
import { getToken } from '../../plugins/gettoken'
import detail from './prodetail'
export default {
  components: {
    detail
  },
  data() {
    return {
      prostate: '',
      prostates: [],
      projects: [],
      word: '',
      pagetotal: 0,
      detailinfo: {},
      dialogshow: false,
      detailid: '',
      loading: false
    }
  },
  mounted() {
    /*eslint-disable*/
    if (
      !localStorage.getItem('userid') ||
      !Number(localStorage.getItem('userid'))
    ) {
      this.$router.push('/login')
      return
    }
    this.searchBefore()
    this.getprolist()
    const that = this
    document.onkeydown = function(e) {
      const keycode = document.all ? event.keyCode : e.which
      if (keycode === 13) {
        that.getprolist()
        return false
      }
    }
  },
  watch: {
    prostate(val) {
      // 筛选状态的时候，获取立项列表
      this.getprolist()
    }
  },
  methods: {
    searchBefore() {
      this.loading = true
      const commondata = JSON.parse(localStorage.getItem('commondata'))
      const data1 = {}
      let data2 = {}
      const that = this
      for (const i in commondata) {
        data1[i] = commondata[i]
      }
      if (localStorage.getItem('userid')) {
        data1.user_id = localStorage.getItem('userid')
      }
      data1.timestamp = Math.round(new Date().getTime() / 1000).toString()
      data1.nonce_str =
        new Date().getTime() + '' + Math.floor(Math.random() * 899 + 100)
      if (localStorage.getItem('clientid')) {
        data1.client_id = localStorage.getItem('clientid')
      }
      if (localStorage.getItem('accesstoken')) {
        data1.access_token = localStorage.getItem('accesstoken')
      }
      // data1.id = this.$route.query.id
      data2 = datawork(data1)
      this.$api.search_before(data2).then((v) => {
        console.log(v)
        if (v.data.errcode === 0) {
          this.loading = false
          this.prostates = v.data.data.statusData
        } else if (v.data.errcode === 1104) {
          getToken(commondata, this)
          setTimeout(() => {
            if (localStorage.getItem('tokenDone')) {
              that.searchBefore()
            }
          }, 1000)
        } else if (v.data.errcode === 1103) {
          getClientId(commondata, this)
          setTimeout(() => {
            if (localStorage.getItem('done')) {
              that.searchBefore()
            }
          }, 1000)
        } else {
          this.loading = false
          this.$message({
            type: 'error',
            message: v.data.errmsg
          })
        }
      })
    },
    getprolist(val) {
      this.loading = true
      const commondata = JSON.parse(localStorage.getItem('commondata'))
      const data1 = {}
      let data2 = {}
      const that = this
      for (const i in commondata) {
        data1[i] = commondata[i]
      }
      if (localStorage.getItem('userid')) {
        data1.user_id = localStorage.getItem('userid')
      }
      data1.timestamp = Math.round(new Date().getTime() / 1000).toString()
      data1.nonce_str =
        new Date().getTime() + '' + Math.floor(Math.random() * 899 + 100)
      if (localStorage.getItem('clientid')) {
        data1.client_id = localStorage.getItem('clientid')
      }
      if (localStorage.getItem('accesstoken')) {
        data1.access_token = localStorage.getItem('accesstoken')
      }
      if (this.prostate) {
        data1.status = this.prostate
      }
      if (this.word && this.word.replace(/(^\s*)|(\s*$)/g, '')) {
        data1.keyword = this.word.replace(/(^\s*)|(\s*$)/g, '')
      }
      if (val) {
        data1.p = val
      }
      data2 = datawork(data1)
      this.$api.get_pro_list(data2).then((v) => {
        console.log(v)
        if (v.data.errcode === 0) {
          this.loading = false
          this.projects = v.data.data.data
          this.pagetotal = Number(v.data.data.count)
        } else if (v.data.errcode === 1104) {
          getToken(commondata, this)
          setTimeout(() => {
            if (localStorage.getItem('tokenDone')) {
              that.getprolist()
            }
          }, 1000)
        } else if (v.data.errcode === 1103) {
          getClientId(commondata, this)
          setTimeout(() => {
            if (localStorage.getItem('done')) {
              that.getprolist()
            }
          }, 1000)
        } else {
          this.loading = false
          this.$message({
            type: 'error',
            message: v.data.errmsg
          })
        }
      })
    },
    search() {
      if (this.word) {
        this.getprolist()
      } else {
        this.$message({
          type: 'error',
          message: '请先输入搜索关键词！'
        })
      }
    },
    pagechange(val) {
      if (val > 1) {
        this.getprolist(val)
      } else {
        this.getprolist()
      }
    },
    clearall() {
      this.word = ''
      this.getprolist()
    },
    tocreate() {
      this.$router.push('/creating')
    },
    edit(val) {
      this.$router.push({ path: '/creating', query: { id: Number(val) } })
    },
    details(val) {
      this.dialogshow = true
      this.detailid = val
    },
    sure() {
      this.dialogshow = false
    },
    delpro(val) {
      this.$confirm('您确定删除该项目吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        lockScroll: false,
        type: 'warning'
      })
        .then(() => {
          this.loading = true
          const commondata = JSON.parse(localStorage.getItem('commondata'))
          const data1 = {}
          let data2 = {}
          const that = this
          for (const i in commondata) {
            data1[i] = commondata[i]
          }
          if (localStorage.getItem('userid')) {
            data1.user_id = localStorage.getItem('userid')
          }
          data1.timestamp = Math.round(new Date().getTime() / 1000).toString()
          data1.nonce_str =
            new Date().getTime() + '' + Math.floor(Math.random() * 899 + 100)
          if (localStorage.getItem('clientid')) {
            data1.client_id = localStorage.getItem('clientid')
          }
          if (localStorage.getItem('accesstoken')) {
            data1.access_token = localStorage.getItem('accesstoken')
          }
          data1.id = Number(val)
          data2 = datawork(data1)
          this.$api.del_pro(data2).then((v) => {
            console.log(v)
            if (v.data.errcode === 0) {
              this.loading = false
              this.$message({
                type: 'success',
                message: '删除成功'
              })
              this.getprolist()
            } else if (v.data.errcode === 1104) {
              getToken(commondata, this)
              setTimeout(() => {
                if (localStorage.getItem('tokenDone')) {
                  that.delpro()
                }
              }, 1000)
            } else if (v.data.errcode === 1103) {
              getClientId(commondata, this)
              setTimeout(() => {
                if (localStorage.getItem('done')) {
                  that.delpro()
                }
              }, 1000)
            } else {
              this.loading = false
              this.$message({
                type: 'error',
                message: v.data.errmsg
              })
            }
          })
        })
        .catch(() => {})
    }
  }
}
</script>
<style lang="stylus" scoped>
.pagetip
  padding 30px 60px
  p
    width 800px
    margin-top 10px
    line-height 20px
    color red
.btns
  justify-content flex-start
.form
  box-shadow none
  margin 0
.itemname + p
  color #333
.imgbox
  width 100px
  >div
    width 100%
    height 100px
    margin-bottom 10px
    overflow hidden
    cursor pointer
  img
    display block
    width 100%
.showimgbox img
  display block
  width 100%
</style>
