import PlaygroundHeader from "./PlaygroundHeader"
import PlaygroundPreview from "./PlaygroundPreview"
import PreviewHeader from "./PreviewHeader"
import PreviewWrapper from "./PreviewWrapper"

const Playground = () => {
  return (
    <>
        <PreviewHeader>
          <PlaygroundHeader />
        </PreviewHeader>
        <PreviewWrapper>
          <PlaygroundPreview />
        </PreviewWrapper>
        </>
  )
}
export default Playground
