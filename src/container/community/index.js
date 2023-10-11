import {
  createElement,
  createHeader,
} from '../../script/layout'

const page = document.querySelector('.page')

const header = createHeader()

page.append(header)

const title = createElement('h1', 'title', 'Коммьюніті')

page.append(title)

const TAB_LIST = [
  {
    text: 'База знань',
    use: false,
  },
  {
    text: 'Інформація',
    use: true,
  },
]

const createTabButton = () => {
  const postTab = createElement('div', 'post__tab')
  TAB_LIST.forEach((tabData) => {
    const button = createElement(
      'button',
      tabData.use ? 'tab button tab-use' : 'tab button',
      tabData.text,
    )
    postTab.append(button)
  })
  return postTab
}

const postTab = createTabButton()
page.append(postTab)

const INFO_LIST = [
  {
    src: '/img/meet.png',
    title: 'Що таке база знань?',
    text: 'База знаний — база данных, содержащая правила вывода и информацию о человеческом опыте и знаниях в некоторой предметной области. В самообучающихся системах база знаний также содержит информацию, являющуюся результатом решения предыдущих задач.',
    buttonText: "Перейти до ком'юніті у Телеграм",
  },
]

const createInfo = () => {
  const infoList = createElement('div', 'info')

  INFO_LIST.forEach((infoData) => {
    const img = createElement('img')

    Object.entries(infoData).forEach(([key, value]) => {
      img[key] = value
    })

    const infoTitle = createElement(
      'h2',
      'info__title',
      infoData.title,
    )
    const infoText = createElement(
      'p',
      'info__text',
      infoData.text,
    )
    const infoButton = createElement(
      'button',
      'info__button button',
      infoData.buttonText,
    )
    infoList.append(img, infoTitle, infoText, infoButton)

    //postList.append(post)
  })

  return infoList
}

const info = createInfo()
page.append(info)
