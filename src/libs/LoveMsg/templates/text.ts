/**
 * @description 纯文本模板-企业微信消息通知
 * https://open.work.weixin.qq.com/api/doc/90000/90135/90236
 */

// import dayjs, { weekToday } from '../../../utils/dayjs'

export const textTemplate = (data: TextTemplateProps) => {
  // const { caiHongpi, sayLove, songLyrics, oneMagazines, netEaseCloud, oneWord, dayEnglish } = data
  const { JokeProps, sayLove } = data

  let text = '早安呀，我可爱善良美丽大方的鸭鸭老婆~新年好!!!\n'
  console.log(JokeProps)
  // 工作日/休息日，需要排除节假日
  // const week = weekToday()
  // if (['星期六', '星期日'].includes(week)) {
  // text += `今天是${week}，过年期间老婆要注意安全\n`
  text += '过年期间老婆在家要注意安全哦,虽然放假但是晚上也别睡太晚了哦\n'
  // }
  /* else {
    text += `鸭鸭老婆起床啦！牛牛向你说早安呦~，记得吃早餐呀😆\n
    嗯哼哼~今天可是${week}哦，上班别迟到了哦~\n`
  } */

  // 添加笑话
  if (JokeProps) {
    //     text += `
    // 彩虹屁：
    text += `\n先给鸭鸭老婆讲个笑话:
${JokeProps.content}\n`
  }

  if (sayLove) {
    text += `\n再给鸭鸭老婆来句情话:
${sayLove.content}\n`
  }

  /* // 诗句
  if (songLyrics) {
    text += `
『${songLyrics.source}』${songLyrics.content}\n`
  }

  if (oneMagazines) {
    text += `
『ONE杂志』${oneMagazines.word}\n`
  }

  if (netEaseCloud) {
    text += `
『网易云音乐热评』${netEaseCloud.content}——${netEaseCloud.source}\n`
  } */

  // 添加一句一言
  /* if (oneWord) {
    text += `
『一言』${oneWord.hitokoto}\n`
  } */

  // 每日英语
  /* if (dayEnglish) {
    text += `
『每日英语（${dayjs(dayEnglish.date).format('ll')}』${dayEnglish.content}`
  } */
  text += '\n讲完了,希望鸭鸭老婆今天能够开开心心的,爱你哦,鸭鸭老婆!'
  return {
    msgtype: 'text',
    text: {
      content: text,
    },
  }
}
