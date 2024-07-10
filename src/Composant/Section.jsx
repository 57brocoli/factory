import PropTypes from 'prop-types';
import Content from './Content';
// import { source } from '../assets/variable/Variable';

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
    console.log(section);
    return (
        <section className={classs.join(' ')} style={{...styles}}>
            {section.contents.map(content =>{
                return(
                    <Content key={content.id} content={content}/>
                )
            })}
        </section>
        
    )
}

export default Section