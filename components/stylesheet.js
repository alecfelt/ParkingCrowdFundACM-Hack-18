export const Stylesheet = (props) => (
  <style dangerouslySetInnerHTML={{__html: props.sheet}} />
)

export const Html = (props) => (
  <style dangerouslySetInnerHTML={{__html: props.html}} />
)

export default Stylesheet
