import PropTypes from 'prop-types';

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
    console.log(styles);
    return (
        <section key={section.id} style={{...styles}} className=''>
            <h2>{section.title}</h2>
            <article dangerouslySetInnerHTML={{ __html: section.content }}></article>
            <div className='imageContainer'>
                {section.images &&
                    section.images.map((img, index) => {
                        return(
                            <div key={index} className='d-flex a-items-center'>
                                <img key={index} src={`http://127.0.0.1:8000/uploads/page/${img.name}`} alt="image section" className='imageSection'/>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Section