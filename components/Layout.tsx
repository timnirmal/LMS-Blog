import { Fragment, FunctionComponent } from 'react'
import classNames from 'classnames'
import Header from './Header'
import Footer from './Footer'
import { MessageList, useMessage } from '../lib/message'
import NavBar from './NavBar'

type LayoutProps = {
  usePadding?: boolean
  useBackdrop?: boolean
}

const FullLayout: FunctionComponent<LayoutProps> = ({ children, usePadding, useBackdrop }) => {
  const { messages } = useMessage()
  return (
    <Fragment>
      <Header />
      <NavBar />
      <main
        className={classNames(
          'relative mx-auto h-screen w-full',
          usePadding && 'px-2 sm:px-6 lg:px-8',
          useBackdrop && 'bg-gray-200'
        )}
      >
        <MessageList messages={messages} />
        {children}
      </main>
      <Footer />
    </Fragment>
  )
}

FullLayout.defaultProps = {
  usePadding: true,
  useBackdrop: false,
}

export default FullLayout
