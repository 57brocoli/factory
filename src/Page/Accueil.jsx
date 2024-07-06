import { motion } from "framer-motion"
import { Link } from "react-router-dom"

function Accueil() {
    return (
        <>
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="d-flex j-content-center a-items-center h-100 flex-direction-colum"
            >
                <Link className="tikiButton" to={'/accueil'}>
                    <img src="/logo.png" alt="logo"/>
                    <h1>Tiki</h1>
                </Link>
            </motion.div>
        </>
    )
}

export default Accueil