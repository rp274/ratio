

// calculate ratio
function calculateRatio(h,l,f){
  const ratio = (h / f);
  const newL = Math.round(l / ratio);
  $('#results').html('<h3>'+f+'" x '+newL+'"</h3>')
}

// watch form
function watchForm(){
  $('form').submit(event => {
    event.preventDefault();
    const h = $('.file-height').val();
    const l = $('.file-length').val();
    const f = $('.fit-to').val();
    $('#results').empty()
    calculateRatio(h,l,f)
  })
}

// start app
$(watchForm)