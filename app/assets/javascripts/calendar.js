$( document ).on( 'ready page:load', function()
{

$( '#calendar' ).fullCalendar({
  editable: true,
  defaultView: 'month',
  header: {
    left: 'today',
    center: 'title',
    right: 'prev next'
  },
  // タイトルの書式
  titleFormat: {
    month: "YYYY年M月"
  },
  // ボタン文字列
  buttonText: {
    today: '今日',
    month: '月',
    week: '週',
    day: '日'
  },
  // 月名称
  monthNames: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
  // 月略称
  monthNamesShort: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
  // 曜日名称
  dayNames: ['日曜日', '月曜日', '火曜日', '水曜日', '木曜日', '金曜日', '土曜日'],
  // 曜日略称
  dayNamesShort: ['日', '月', '火', '水', '木', '金', '土'],
  // 日付クリックイベント
  dayClick: function( date ) {
    window.location = "reports/daily_reports/?day=" + date.format();
  }
});

});
