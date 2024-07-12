import PropTypes from 'prop-types';
import Content from './Content';
import { source } from '../assets/variable/Variable';

Section.propTypes = {
    section: PropTypes.shape({
        id: PropTypes.number.isRequired,
        contents: PropTypes.array.isRequired,
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
    const header = classs.includes("header")

    return (
        <>
            {header ? 
                <section className={classs.join(' ')} 
                style={{ backgroundImage: section.contents[0].images[0] ? 
                    `url(${source.uri}${section.contents[0].images[0].name})` : 
                    // `url(http://127.0.0.1:8000/uploads/page/${section.contents[0].images[0].name})` :
                    undefined,
                    ...styles
                }}
                >
                    {section.contents.map(content => (
                    <Content key={content.id} content={content} type={"header"}/>
                    ))}
                </section>
                :
                <section className={classs.join(' ')} style={{...styles}}>
                    {section.contents.map(content =>{
                        return(
                            <Content key={content.id} content={content} type={"section"}/>
                        )
                    })}
                </section>
            }
            
        </>
        
        
    )
}

export default Section