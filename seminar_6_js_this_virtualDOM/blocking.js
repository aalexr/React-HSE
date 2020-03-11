function handleClick() {
  alert('ALERT');
}

function startBlockingCall() {
  let res = 0;
  for (let i = 0; i < Math.pow(10, 10); ++i) {
    res += i;
  }
}