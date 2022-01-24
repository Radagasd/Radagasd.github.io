const setTheme = (theme) => {
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
}

const getTheme = () => {
    const theme = localStorage.getItem('theme');
    theme && setTheme(theme);
}

getTheme();

const mySwitchTheme = _ =>
{
  if(document.documentElement.className == "light" || document.documentElement.className == "")
  {
    setTheme('dark');
  }
  else
  {
    setTheme('light');
  }
}

document.getElementById('theme-select').addEventListener('change', function() {
  setTheme(this.value);
});