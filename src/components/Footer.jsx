import React from 'react'

const Footer = () => {
  return (
   <footer>
    <div className="container-fluid">
        <div className="row text-center">
            <div className="col-md-6">
                <div className="footer-left">
                    <h4>Copyright &copy;{new Date().getFullYear()}</h4>
                </div>
            </div>
            <div className="col-md-6">
                <div className="footer right">
                    <h4>This is template is designed by Dinesh ❤</h4>
                </div>
            </div>
        </div>
    </div>
   </footer>
  )
}

export default Footer