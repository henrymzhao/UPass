// debugger;
$(document).ready(function () {
  // alert();
  $(".selectSchool").ready(function() {

    $('#PsiId [value=sfu]').attr('selected', 'selected');
    $('#PsiId [value=sfu]').prop('selected', 'selected');

    $('#goButton').removeAttr("disabled")
    $('#goButton').click();
  });

  $("#fm1").ready(function() {
    $('#username').val('mhzhao@sfu.ca');
    $('#password').val('v20152002');
    $('#fm1').submit();
  });

  $("#form-request").ready(function() {

  })
});
