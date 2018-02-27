$(document).ready(function() {
  const titleInput = $("#title");
  const posterImg = $("#poster");
  titleInput.on('keyup', function(e) {
    if (e.key === 'Enter') {
      const title = $(this).val();
      $.get(`./poster?title=${title}`, function(response) {
        posterImg.attr('src', response.poster)
        titleInput.val("");
      })
    }
  })
})
