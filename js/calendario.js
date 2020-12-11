// escuchador de eventos del lado de java script. cuando no esta cargado 
document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendario'); // este nombre tiene que conicidir con el html

    var calendar = new FullCalendar.Calendar(calendarEl, {
      locale: 'es', // idioma
      navLinks: true,
      selectable: true,
      /*select: function(arg) {
        if (calendar.select){
            var title = prompt('Event Title:');
            if (title) {
                calendar.addEvent({
                    title: title,
                    start: arg.start,
                    end: arg.end,
                    allDay: arg.allDay
                })
            }
                calendar.unselect()
        }
      },*/
      eventClick: function(arg) {
        if (confirm('Desea ud solicitar un turno para esta fecha?')) {
            calendar.select;
            var title = prompt('ingrese su nombre y dni');
            calendar.addEvent({
                title: title,
                start: arg.start,
                end: arg.end,
                allDay: arg.allDay
            })
        }
        calendar.unselected()
      },
      //editable: true,
      //dayMaxEvents: true,
      events: [  // serie de eventos ---> 
            {
                title: 'Vacuna 1',
                start: '2020-11-16',
                end:'2020-11-16'  // el ultimo no tiene coma (es un lenguaje jason)
            },
            {
                title: 'Entrega EDA 3',
                start: '2020-11-18',
                end:'2020-11-18'
            },
            {
                title: 'Vacuna 2',
                start: '2020-12-07',
                end:'2020-12-07'
            }
        ]
    }); 

    calendar.render();
  });