
function validation() {
  console.log($($('.pw')[0]).val())
  console.log($($('.pw')[1]).val())
  if( $($('.pw')[0]).val() != $($('.pw')[1]).val()){
    window.alert('패스워드를 동일하게 작성해주세요!')
    return false;
  }
}