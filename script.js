const clock = document.querySelector('.clock');
const day = document.querySelector('.day');

const timer = () =>{
const now = new Date();
const h = dateFns.format(now, 'hh');
const m = dateFns.format(now, 'mm');
const s = dateFns.format(now, 'ss');
const ap = dateFns.format(now, 'a');

const month = dateFns.format(now, 'MMM');
const wo = dateFns.format(now, 'Do');
const yr = dateFns.format(now, 'YYYY');

const html =
    `<span class="hr">${h}</span>:
     <span class="mn">${m}</span>:
     <span class="se">${s}</span>:
     <span class="ap">${ap}</span>
    `
const html2 =
    `<span class="hr">${wo}</span>
    <span class="hr">${month}</span>
    <span class="hr">${yr}</span>
    `

clock.innerHTML = html;
day.innerHTML = html2;
}


setInterval(timer,1000);

