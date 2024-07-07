import PropTypes from 'prop-types';
import { source } from '../assets/variable/Variable';

Section.propTypes = {
    section: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
        images: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string.isRequired,
            })
        ).isRequired,
        styles: PropTypes.arrayOf(
            PropTypes.shape({
                property: PropTypes.string.isRequired,
                value: PropTypes.string.isRequired,
            })
        ).isRequired,
        class: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string.isRequired,
            })
        ).isRequired,
    }).isRequired,
};

function Section({section}) {

    let styles = {};
    if (section && section.styles) {
        styles = section.styles.reduce((acc, style) => {
            acc[style.property] = style.value;
            return acc;
        }, {});
    }
    let classs = [];
    if (section && section.class) {
        classs.push(...section.class.map(o => o.name));
    }
    console.log(classs);
    return (
        <section key={section.id} className={classs.join(' ')}>
            <article style={{...styles}}>
                <h2>{section.title}</h2>
                <article dangerouslySetInnerHTML={{ __html: section.content }}></article>
            </article>
            <div className='imageContainer'>
                    {section.images &&
                        section.images.map((img, index) => {
                            return(
                                <div key={index} className='d-flex a-items-center'>
                                    <img key={index} 
                                    src={`${source.uri}${img.name}`} 
                                    // src={`http://127.0.0.1:8000/uploads/page/${img.name}`} 
                                    alt="image section" className='imageSection'/>
                                </div>
                            )
                        })
                    }
                </div>
        </section>
    )
}

export default Section