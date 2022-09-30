const CodeEditor = ({ boilerplate, setAnswerInput }) => {
  return (
    <div>
        <h1>Code Editor</h1>
        <pre>{boilerplate}</pre>
        <input type="text" onChange={(e) => setAnswerInput(e.target.value)}/>
    </div>
  )
}
export default CodeEditor
