 $('html').addClass('d_none');
            $(document).ready(function() {
            $('html').show();
            $("body").queryLoader2({
            backgroundColor: '#fff',
            barColor: '#056972',
            barHeight: 4,
            percentage: true,
            deepSearch: true,
            minimumTime: 1000
            });
            });

$(".ctc-section").click(function() {
  window.location = $(this).find("a").attr("href"); 
  return false;
});