import pissarroBoulevard from '../assets/images/pissarro-boulevard.jpg'
import monetImpression from '../assets/images/monet-impression.jpg'
import vanGoghStarryNight from '../assets/images/van-gogh-starry-night.jpg'
import vermeerGirl from '../assets/images/vermeer-girl.jpg'
import hokusaiWave from '../assets/images/hokusai-wave.jpg'
import klimtKiss from '../assets/images/klimt-kiss.jpg'
import daliMemory from '../assets/images/dali-memory.jpg'
import munchScream from '../assets/images/munch-scream.jpg'

export const CARD_TYPES = [
  { id: 'pissarro', label: 'Boulevard Montmartre', src: pissarroBoulevard },
  { id: 'monet', label: 'Impression, Sunrise', src: monetImpression },
  { id: 'van-gogh', label: 'The Starry Night', src: vanGoghStarryNight },
  { id: 'vermeer', label: 'Girl with a Pearl Earring', src: vermeerGirl },
  { id: 'hokusai', label: 'The Great Wave off Kanagawa', src: hokusaiWave },
  { id: 'klimt', label: 'The Kiss', src: klimtKiss },
  { id: 'dali', label: 'The Persistence of Memory', src: daliMemory },
  { id: 'munch', label: 'The Scream', src: munchScream },
]

export const PAIRS_COUNT = CARD_TYPES.length
export const TOTAL_CARDS = PAIRS_COUNT * 2