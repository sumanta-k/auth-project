const auth = true;
 
let redirect;

if(auth){
    alert('welcome to the dashboard');
    redirect ='/dashboard';
}else{
    alert('Access denied');
    redirect='/login';
}

auth ?(alert('Welcome to the dashboard'),redirect='/dashboard'):(alert("Access denied"),redirect='/login');
console.log(redirect);


redirect = auth ?(alert('welcome to the dashboard'),'/dashboard'):(alert('access denied'),'/login');

console.log(redirect);

//if you don't need else
auth?console.log("welcome to the dashboard"):null;

// another short hand
auth && console.log("welcome to the dashboard");