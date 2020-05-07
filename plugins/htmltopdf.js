import html2Canvas from 'html2canvas'
import JsPDF from 'jspdf'
import $ from 'jquery'
export default {
  install(Vue, options) {
    Vue.prototype.getPdf = function(htmlTitle, htmlid) {
      const element = document.getElementById('filecontent')
      //   const title = htmlTitle
      const domHeight = $('#' + htmlid).height()
      const outerHeight = $('#' + htmlid).outerHeight()
      const windowHeight = window.screen.availHeight
      const outerWidth = $('#' + htmlid).outerWidth()
      html2Canvas(element, {
        logging: false,
        allowTaint: true,
        width: outerWidth,
        height: domHeight < windowHeight ? windowHeight : outerHeight,
        windowHeight: document.getElementById(htmlid).scrollHeight
        // y: window.pageYOffset - 30
      }).then(function(canvas) {
        const pdf = new JsPDF('p', 'mm', 'a4') // A4纸，纵向
        const ctx = canvas.getContext('2d')
        const a4w = 210
        const a4h = 297 // A4大小，210mm x 297mm，四边各保留20mm的边距，显示区域170x257
        const imgHeight = Math.floor((a4h * canvas.width) / a4w) // 按A4显示比例换算一页图像的像素高度，这是一页上面的像素数
        let renderedHeight = 0
        while (renderedHeight < canvas.height) {
          const page = document.createElement('canvas')
          page.width = canvas.width
          page.height = Math.min(imgHeight, canvas.height - renderedHeight) // 可能内容不足一页
          // 用getImageData剪裁指定区域，并画到前面创建的canvas对象中
          page
            .getContext('2d')
            .putImageData(
              ctx.getImageData(
                0,
                renderedHeight,
                canvas.width,
                Math.min(imgHeight, canvas.height - renderedHeight)
              ),
              0,
              0
            )
          pdf.addImage(
            page.toDataURL('image/jpeg', 1.0),
            'JPEG',
            0,
            0,
            a4w,
            Math.min(a4h, (a4w * page.height) / page.width)
          ) // 添加图像到页面，保留10mm边距
          renderedHeight += imgHeight
          if (renderedHeight < canvas.height) {
            pdf.addPage()
          } // 如果后面还有内容，添加一个空页
          // delete page;
        }
        pdf.save(htmlTitle)
      })
    }
  }
}
