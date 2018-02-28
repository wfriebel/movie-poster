$(document).ready(function() {
  const titleInput = $("#title");
  const posterImg = $("#poster");
  const error = $('#error-message');

  titleInput.on('keyup', function(e) {
    if (e.key === 'Enter') {
      const title = $(this).val();
      $.get(`./poster?title=${title}`, function(response) {
        titleInput.val("");
        if (response.poster){
          posterImg.removeClass('hidden');
          error.addClass('hidden');
          posterImg.attr('src', response.poster)
        } else {
          error.removeClass('hidden');
          posterImg.addClass('hidden');
          error.text(`Unable to fetch the poster for \'${title}\'`)
        }
      })
    }
  })
})
