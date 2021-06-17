class CountdownTimer {
    constructor({selector, targetDate}) {
              this.targetDate = new Date(targetDate);
              this.days = document.querySelector(`${selector} .value[data-value="days"]`);
              this.hours = document.querySelector(`${selector} .value[data-value="hours"]`);
              this.minutes = document.querySelector(`${selector} .value[data-value="mins"]`);
              this.seconds = document.querySelector(`${selector} .value[data-value="secs"]`);
          
            }

            getCurrentTime() {
            return this.targetDate - Date.now();
              }
            
              startTimer() {
            setInterval(() => {
            if(this.getCurrentTime() >= 0){
                this.days.textContent = Math.floor(this.getCurrentTime() / (1000 * 60 * 60 * 24));
                this.hours.textContent = Math.floor((this.getCurrentTime() % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                this.minutes.textContent = Math.floor((this.getCurrentTime() % (1000 * 60 * 60)) / (1000 * 60));
                this.seconds.textContent = Math.floor((this.getCurrentTime() % (1000 * 60)) / 1000);
            }
            else{
                document.querySelector('#timer-1').innerHTML = 'Happy End My Dear Friends'
            }
            },1000);
        }

        }

 const Timer = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Jul 17, 2022'),
  });
Timer.startTimer()
// const days = document.querySelector('[data-value="days"]')
// days.textContent = Timer.days;
// const hours = document.querySelector('[data-value="hours"]')
// hours.textContent = Timer.hours;
// const mins = document.querySelector('[data-value="mins"]')
// mins.textContent = Timer.mins;
// const secs = document.querySelector('[data-value="secs"]')
// secs.textContent = Timer.secs;