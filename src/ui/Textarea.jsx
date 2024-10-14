import "../styles/Textarea.scss"

export function Textarea(props) {
  return (
    <>
      <label>
        {props.label}
        <div>
          <textarea
            rows={props.rows}
            cols={props.cols}
            placeholder={props.placeholder}
            value={props.value}
            defaultValue={props.defaultValue}
            onChange={props.onChange}
            className={props.className}
          />
        </div>
      </label>
    </>
  );
}