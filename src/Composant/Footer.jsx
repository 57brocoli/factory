import logo from '/logo.png'
import fc from '/images/footer/facebook_logo.png'
import ins from '/images/footer/instagram_logo.png'
import x from '/images/footer/x_logo.png'
import yt from '/images/footer/youtube_logo.png'

function Footer() {
    return (
        <footer className="d-flex c-white wrap">
            <section className="flex mx-2 my-2 ">
                <img src={logo} className='imgFooter' alt="img Footer"/>
                <h3 className='mx-07'>Tiki</h3>
                <p className='mx-07'>Vous pouvez nous rejoindre sur :</p>
                <div className='d-flex gap-07 mx-07'>
                    <img src={fc} className='logoFooter' alt="logo-{fc}" />
                    <img src={ins} className='logoFooter' alt="logo-{ins}" />
                    <img src={x} className='logoFooter' alt="logo-{x}" />
                    <img src={yt} className='logoFooter' alt="logo-{yt}" />
                </div>
            </section>
            <section className="flex mx-2 my-2 ">
                <h3 className='mx-07'>Service lié à l&apos;entreprise:</h3>
                <p className='mx-07'>Qui somme nous</p>
                <p className='mx-07'>Nos produits</p>
                <p className='mx-07'>Mention legal</p>
                <p className='mx-07'>Nous rejoindre</p>
            </section>
            <section className="flex mx-2 my-2 ">
                <h3 className='mx-07'>Nous contacter :</h3>
                <address className='mx-07'>
                    <strong>Nom de l&apos;entreprise</strong><br />
                    123 Rue Exemple<br />
                    75001 Paris<br />
                    France<br />
                    <a href="mailto:contact@entreprise.com">contact@entreprise.com</a>
                </address>
            </section>
        </footer>
    )
}

export default Footer