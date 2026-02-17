// 1. Dynamic Greeting based on time
const greeting = document.getElementById('greeting');
const hour = new Date().getHours();
if (hour < 12) greeting.innerText = "Good Morning!";
else if (hour < 18) greeting.innerText = "Good Afternoon!";
else greeting.innerText = "Good Evening!";

// 2. Theme Toggle
const themeBtn = document.getElementById('theme-toggle');
themeBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const targetTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', targetTheme);
});

// 3. To-Do Logic
function addTask() {
    const input = document.getElementById('todo-input');
    const list = document.getElementById('todo-list');
    
    if (input.value === '') return;

    const li = document.createElement('li');
    li.innerHTML = `
        <span style="display:flex; justify-content:space-between; margin-bottom:10px;">
            ${input.value} 
            <button onclick="this.parentElement.parentElement.remove()" style="padding:2px 8px; background:#ef4444;">X</button>
        </span>
    `;
    list.appendChild(li);
    input.value = '';
}
