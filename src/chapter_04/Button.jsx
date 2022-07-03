// eslint-disable-next-line no-unused-vars
function Button(props) {
  const styles = {color: props.color};
  return (

    <button style={styles}>
      <b>
        {props.children}
      </b>
    </button>


  )
}

function ConfirmDialog(props) {
  return (
    <div>
      <p>내용을 확인하셧으면 확인 버튼을 눌러주세요</p>
      <Button color='green'>확인</Button>

    </div>

  )
}

export default ConfirmDialog;

