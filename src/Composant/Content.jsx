import PropTypes from 'prop-types';

Content.propTypes = {
    content: PropTypes.shape({
        id:PropTypes.number.isRequired,
        content:PropTypes.string.isRequired,
        images: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string.isRequired,
            })
        ),
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
    })
}

function Content({content}) {

    let styles = {};
    if (content && content.styles) {
        styles = content.styles.reduce((acc, style) => {
            acc[style.property] = style.value;
            return acc;
        }, {});
    }
    let classs = [];
    if (content && content.class) {
        classs.push(...content.class.map(o => o.name));
    }

    console.log(content);
    return (
        <section className={classs.join(' ')} style={{...styles}}>
            <article >
                <article dangerouslySetInnerHTML={{ __html: content.content }}></article>
            </article>
            {content.images.length > 0 &&
                <div className='imageContainer'>
                    {content.images.map((img, index) => {
                        return(
                            <div key={index} className='d-flex a-items-center'>
                                <img key={index} 
                                // src={`${source.uri}${img.name}`} 
                                src={`http://127.0.0.1:8000/uploads/page/${img.name}`} 
                                alt="image section" className='imageSection'/>
                            </div>
                        )
                    })}
                </div>
            }
        </section>
    )
}

export default Content