import { Routes, Route } from 'react-router-dom'
import RootLayout from './routes/RootLayout'
import HomePage from './routes/HomePage'
import CaseStudyPage from './routes/CaseStudyPage'
import BlogList from './routes/BlogList'
import BlogPost from './routes/BlogPost'
import NotFound from './routes/NotFound'

export default function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects/:slug" element={<CaseStudyPage />} />
        <Route path="/work/:slug" element={<CaseStudyPage />} />
        <Route path="/blog" element={<BlogList />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
