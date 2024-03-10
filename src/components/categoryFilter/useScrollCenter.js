import { useLayoutEffect } from "react"


const useScrollCenter = ({ ref, targetId }) => {
  useLayoutEffect(() => {
    const categoryWrapEl = ref.current

    if (!categoryWrapEl) {
      return
    }

    const isScrollActivated =
      categoryWrapEl.scrollWidth >= categoryWrapEl.offsetWidth

    if (!isScrollActivated) {
      return
    }


    const activeCategoryEl = categoryWrapEl.querySelector(
      `#${targetId}`
    )

    if (!activeCategoryEl) {
      return
    }

    const offsetX = activeCategoryEl.offsetLeft - categoryWrapEl.offsetLeft
    categoryWrapEl.scrollTo(
      offsetX -
        categoryWrapEl.offsetWidth / 2 +
        activeCategoryEl.offsetWidth / 2,
      0
    )
  }, [ref, targetId])
}

export default useScrollCenter
