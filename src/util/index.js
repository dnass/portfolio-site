import { config, library } from '@fortawesome/fontawesome-svg-core'
import {
  faEnvelopeSquare,
  faExternalLinkAlt,
  faPhone,
  faEnvelope,
  faMapMarkerAlt
} from '@fortawesome/free-solid-svg-icons'
import {
  faTwitterSquare,
  faGithubSquare,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons'

config.autoAddCss = false

library.add(
  faExternalLinkAlt,
  faEnvelopeSquare,
  faTwitterSquare,
  faGithubSquare,
  faLinkedin,
  faPhone,
  faEnvelope,
  faMapMarkerAlt
)

export const linkUp = (html) =>
  html.split('a href').join("a target='_blank' rel='noopener noreferrer' href")
