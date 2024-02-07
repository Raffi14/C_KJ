import { Link } from 'react-router-dom';
function Container(){
    return(
      <div className='container'>
        <div className="left-container">
            <div className="circle"></div>
            <div className="image"></div>
            <Footer />
        </div>
        <div className="right-container">
          <div className="line"></div>
            <Box_Login />
        </div>
      </div>
    )
  }
  
function Box_Login(){

  // function onsub(){
  //   const nama ="halo";
  //   const pass = 'pass'

  //   if(username.value == nama && password.value == pass){
  //     alert("Login Berhasil");
  //     const link = document.createElement("Link");
  //     link.setAttribute("to", "/home");
  //     link.click();

      
  //   }
  // }
  return(
    <div className='Log-in'>
      <form method="post" onSubmit={onsub}>
        <h1>Masuk Sekarang</h1>
        <div className="input-username">
          <input type="text" name="username" id="username" placeholder='Nama pengguna' required/>
        </div>
        <div className="input-password">
          <label htmlFor="password"></label>
          <input type="password" name="password" id="password" placeholder='Kata Sandi' required/>
        </div>
        <div className="forgot">
          <a href="#">Lupa Kata Sandi ?</a>
        </div>
        <div className="button-login">
          <Link to={'/home'}>
            <button>Login</button>
          </Link>
        </div>
      </form>
    </div>
  )
}
  
function Footer(){
  return(
    <div className='Box'>
      <div className='content'>
        <div className="text">
          <p>Membantu kamu untuk lebih mudah mengatur keuangan</p>
        </div>
        <div className="image-foot"></div>
      </div>
    </div>
  )
}

export default function Log_in(){
  return(
    <Container />
  )
}