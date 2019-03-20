import { config, library } from '@fortawesome/fontawesome-svg-core'
import {
  faEnvelopeSquare,
  faExternalLinkAlt
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
  faLinkedin
)