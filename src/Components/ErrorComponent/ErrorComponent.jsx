import imgError from '../../../public/images/resource_not_found.png';
import './ErrorComponent.css'

const ErrorComponent = () => {
    return(
        <div className="fourContainer">
            <div className="divMobileError">🦷 Error 404 🦷 <p>Page not found </p></div>
            <img src={imgError} alt="Resource not found - 404 error" className="imageError404" />
        </div>
    )
}

export default ErrorComponent;