window.MathJax = {
    loader: { load: ['[tex]/ams'] },                 // bật AMS
    tex: {
        packages: { '[+]': ['ams'] },
        inlineMath: [['~', '~'], ['\\(', '\\)']],
        displayMath: [['$$', '$$'], ['\\[', '\\]']]
    },
    options: {
        enableMenu: false
    }
    // Chọn CHTML để bám webfont MathJax (giống LaTeX)                  // nếu bạn dùng SVG, font sẽ “đóng” trong SVG
};