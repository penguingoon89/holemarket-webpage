jQuery(document).ready(function(){

  $('.ment').css({
    'text-align' : 'center',
    'padding-top' : 200,
    'color' : 'white',
    'font-size' : 30,
    'line-height' : '1.5em',
  })
  $('.instagram').hide()
  $('.contact-form').css('margin-left', 960)
  $('.contact-form').hide()

  var typingIdx=0;
  var typingTxt = '최고의 품질과 합리적인 가격\n고객이 행복해야 우리도 행복합니다' // 타이핑될 텍스트를 가져온다 
  typingTxt=typingTxt.split(""); // 한글자씩 자른다. 
  var tyInt = setInterval(typing, 100); // 반복동작 

  function typing(){ 
    if(typingIdx<typingTxt.length){ // 타이핑될 텍스트 길이만큼 반복 
      if(typingTxt[typingIdx] == '\n'){
        $(".ment").append('<br />'); // 한글자씩 이어준다. 
      }else{
        $(".ment").append(typingTxt[typingIdx]); // 한글자씩 이어준다. 
      }
      typingIdx++; 
      } else{ 
        clearInterval(tyInt); //끝나면 반복종료
      } 
  }  


  //특정 영역에서 이벤트 발생하게 하기
  var isChartShow = false
  // window는 로드가 끝난 후
  $(window).on('scroll', function(){
    if(!isChartShow){
      if($(window).scrollTop() > $('.our-job').offset().top-250){
        isChartShow = true
        //차트 그리기
        var ctx = $('#myChart');
        new Chart(ctx, {
          type: 'bar',
          data: {
            labels: ["2017", "2018", "2019"],
            datasets: [{
              label: "Customers (unit: million)",
              backgroundColor: "#08C7BD",
              data: [75, 82, 94],
              barThickness : 30,
            }]
          },
          options: {
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero: true
                }
              }]
            },
            animation: {
              duration: 3000 
            },
          },
        });

        //구멍가게 자랑
        $('.instagram').fadeIn(2000)
      }
    }
  })

  var isContactShow = false
  $(window).on('scroll', function(){
    if(!isContactShow){
      if($(window).scrollTop() > $('.decript').offset().top+200){
        isContactShow = true

        $('.contact-form').show()
        $('.contact-form').animate({'marginLeft' : 0}, 1200)
      
        //console.log($('.contact-form').css('margin-left'))
      }
    }
  })

})