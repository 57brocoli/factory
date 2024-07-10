import Footer from '../Composant/Footer';
import Navigation from '../Composant/Navigation';
import PropTypes from 'prop-types';
import { useDimention } from '../assets/variable/Variable';
import Section from '../Composant/Section';
// import { source } from '../assets/variable/Variable';

Page.propTypes = {
    data: PropTypes.shape({
        sections: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number.isRequired,
                Category: PropTypes.string.isRequired,
            })
        ).isRequired,
        styles: PropTypes.arrayOf(
            PropTypes.shape({
                property: PropTypes.string.isRequired,
                value: PropTypes.string.isRequired,
            })
        ),
    }).isRequired,
};

function Page({data}) {

    const h = useDimention()
    const height = h.height
    console.log(data);

    let styles = {};
    if (data && data.styles) {
        styles = data.styles.reduce((acc, style) => {
            acc[style.property] = style.value;
            return acc;
        }, {});
    }

    return (
        <div style={{minHeight: height}} className='d-flex f-direction-colum j-content-between'>
            <Navigation/>
            <main style={{...styles}}>
                {data ?
                    <>
                        {data.sections
                            .filter(section=>section.Category==='Header')
                            .map(section=>{
                            return(
                                <section key={section.id} className='header t-center'
                                 style={{ backgroundImage: `url(http://127.0.0.1:8000/uploads/page/${section.contents[0].images[0].name})` }}
                                //  style={{ backgroundImage: `url(${source.uri}${section.images[0].name})` }}
                                 >
                                    <article dangerouslySetInnerHTML={{ __html: section.contents[0].content }}></article>
                                </section>
                            )
                        })}
                        {data.sections
                            .filter(section=>section.Category==='Section')
                            .map(section=>{
                            return(
                                <Section key={section.id} section={section}/>
                            )
                        })}
                    </> 
                    :
                    <div>
                        <h2>Impossible de récupérer le contenu de la page</h2>
                    </div>  
                }
            </main>
            <Footer/>
        </div>
    );
}



export default Page;