export default function Login() {
    return (
      
        <div className="flex w-full h-screen ">
          <div className="border-4 border-pink-400 w-2/4 flex flex-col">
            <div className="w-full h-1/3 ">
              <h1>Logo</h1>
            </div> 
            <div className="w-full mx-auto h-1/3"><h1>Image</h1></div>
            <div className="w-full h-1/3">
            <h1>Welcome to the Future of Digital Entrepreneurship</h1>
            <br />
            <p>
            Your Key To Digital Success
              </p></div>
          </div>


          <div className=" w-2/4 flex flex-col  bg-[#272855] text-white">
          <div className="mx-auto">
          <h1>Log in to your account</h1>
            <br />
            <h2>Welcome back! Please enter your details.</h2>
          </div>
           
<br />  
            <div className="mx-auto">
              <h3>Email</h3>
              
              <input type="text" placeholder="enter an email" name="" id="" />
            </div>

            <br />  
            <div className="mx-auto">
              <h3>Password</h3>
              
              <input type="text" placeholder="enter a password" name="" id="" />
            </div>

            <br />
            <div className="flex gap-8 mx-auto">
              <input type="checkbox" name="Remember for 30 days" id="" /><p>Remember for 30 days</p>
              <p>Forgot password</p>
            </div>



            <div className="mx-auto">
              <button><a href="#"></a>Sign in</button>
            </div>

            <div className="mx-auto">
              <button><a href="#"></a>Sign in with Google</button>
            </div>


<br />
<div className="mx-auto">
  <h3>Don't have an account ? <a className="font-bold" href="#">Sign up</a></h3>
</div>
            </div>
        </div>
    );
  }
  