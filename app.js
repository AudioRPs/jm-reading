// On Call. The questions are the ones Joel asks on his calls, workshops and masterclasses, in his order.
const $ = s => document.querySelector(s);
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const mmss = s => `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, '0')}`;
const money = n => '£' + Math.round(n).toLocaleString('en-GB');
const title = v => (V[v] || 'YouTube').replace(/\s*[|]\s*Joel Mc\w+.*$/i, '').replace(/\s*\(.*?\)\s*$/, '').trim();

// ---------- Joel's pieces ----------
function say(key) {
  const q = Q[key];
  return `<div class="say"><p>${esc(q.t.charAt(0).toUpperCase() + q.t.slice(1))}</p><a class="src" href="https://www.youtube.com/watch?v=${q.v}&t=${q.at}s" target="_blank" rel="noopener"><b>Joel</b> · ${esc(title(q.v))} · at ${mmss(q.at)}</a></div>`;
}
function clip(key) {
  const c = CLIPS[key];
  return `<div class="clip" data-clip="${key}">
    <button class="thumb" style="background-image:url(https://i.ytimg.com/vi/${c.v}/hqdefault.jpg)" aria-label="Play: ${esc(c.q)}">
      <span class="qq">${esc(c.q)}</span><span class="play"></span><span class="len">${mmss(c.e - c.s)}</span>
    </button>
    <div class="cap"><b>Joel</b> from “${esc(title(c.v))}” · at ${mmss(c.s)}<a href="https://www.youtube.com/watch?v=${c.v}&t=${c.s}s" target="_blank" rel="noopener">YouTube ↗</a></div>
  </div>`;
}
document.addEventListener('click', ev => {
  const t = ev.target.closest('.clip .thumb');
  if (!t) return;
  const c = CLIPS[t.closest('.clip').dataset.clip];
  document.querySelectorAll('.clip iframe').forEach(f => { const b = f.closest('.clip'); b.outerHTML = clip(b.dataset.clip); });
  t.outerHTML = `<iframe src="https://www.youtube-nocookie.com/embed/${c.v}?autoplay=1&rel=0&modestbranding=1&playsinline=1&start=${c.s}&end=${c.e}" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen title="${esc(c.q)}"></iframe>`;
});

// ---------- Joel's questions, in his order ----------
const STEPS = [
  { key: 'level', type: 'money', per: true, title: 'What income level are you currently stuck at?',
    sub: 'I know I\'m asking you to be honest here. It\'s only so I can help you.' },
  { key: 'long', title: 'How long have you been at that income level, despite all the effort?',
    opts: [['1', 'About a year'], ['2', 'One or two years'], ['3', 'Three years'], ['5', 'Longer than that']] },
  { key: 'goal', type: 'money', title: 'If there was no limitations, how much money would you really love to make a month?',
    sub: 'Not what you think you can make. What you\'d really love.' },
  { key: 'why', title: 'Why do you want it? What are you going to do with it?',
    opts: [['parents', 'Look after my mum and dad'], ['kids', 'Take my kids places'], ['bills', 'Never worry about the bills again'],
           ['free', 'Work when I want, travel where I want'], ['buy', 'The house, the car']] },
  { key: 'struggle', title: 'What\'s your biggest struggle right now?',
    opts: [['heavy', 'I\'m working so hard and it feels heavy'], ['slips', 'I have a good month, then it slips back'],
           ['knowall', 'I know all this stuff, but nothing changes'], ['scared', 'I\'m scared to make decisions'],
           ['buy', 'People don\'t buy, they always need to think about it']] },
  { key: 'change', title: 'What do you think needs to change?',
    opts: [['marketing', 'My marketing'], ['sales', 'My sales skills'], ['place', 'My industry, or where I live'],
           ['others', 'Something at home, or a business partner'], ['me', 'Me']] },
  { key: 'iam', title: 'What are you putting after “I am”?', sub: 'The thing you say to yourself that no one else hears.',
    opts: [['notgood', 'I am not good enough'], ['unlucky', 'I am unlucky'], ['hard', 'I am finding it hard to grow my business'],
           ['behind', 'I am always behind'], ['magnet', 'I am a magnet to money']] },
  { key: 'belief', title: 'What\'s a belief you heard growing up about money?',
    opts: [['hard', 'Money is hard to earn'], ['work', 'You have to work hard and long'], ['evil', 'Money is the root of all evil'],
           ['afford', 'We can\'t afford that'], ['taboo', 'Money was never talked about']] },
  { key: 'now', title: 'How\'s that making you feel?', sub: 'Where you are right now.',
    opts: [['frustrated', 'Frustrated'], ['angry', 'Angry'], ['loop', 'Like I\'m in a loop'], ['scraping', 'Like I\'m just scraping by'], ['fine', 'Fine, but I want more']] },
  { key: 'end', type: 'multi', title: 'If you\'d already achieved this goal, how would you feel right now?', sub: 'Pick as many as you like.',
    opts: [['relieved', 'Relieved'], ['grateful', 'Grateful'], ['happy', 'Happy'], ['calm', 'Calm'], ['free', 'Free'], ['proud', 'Proud']] },
  { key: 'mind', title: 'What\'s your mind telling you, to stop you from going for it?',
    opts: [['afford', '“How am I going to afford this?”'], ['time', '“I don\'t have the time”'], ['alone', '“I can do this on my own”'],
           ['fail', '“What if it doesn\'t work?”'], ['ready', 'Nothing. I\'m ready.']] },
  { key: 'committed', title: 'On a scale of 1 to 10, how committed are you?',
    opts: [['10', '10'], ['9', '9'], ['8', '7 or 8'], ['6', '6 or less'], ['int', 'I\'m interested']] },
];

const A = { end: [] };
let at = 0;
function show(id) { document.querySelectorAll('.screen').forEach(s => s.classList.toggle('on', s.id === id)); window.scrollTo({ top: 0 }); }

function renderStep() {
  const st = STEPS[at];
  $('#count').textContent = `${at + 1} of ${STEPS.length}`;
  $('#progBar').style.width = `${((at + 1) / STEPS.length) * 100}%`;
  let body;
  if (st.type === 'money') {
    const v = A[st.key] || {};
    body = `<div class="numrow"><div class="f money"><span>£</span><input id="num" inputmode="numeric" placeholder="${st.key === 'goal' ? '20,000' : '3,000'}" value="${v.n ? v.n.toLocaleString('en-GB') : ''}"></div>
      ${st.per ? `<div class="per"><button data-p="m" class="${v.p !== 'y' ? 'on' : ''}">a month</button><button data-p="y" class="${v.p === 'y' ? 'on' : ''}">a year</button></div>` : '<div class="per"><button class="on" disabled>a month</button></div>'}</div>`;
  } else {
    const multi = st.type === 'multi';
    body = `<div class="opts">${st.opts.map(([v, l]) => {
      const sel = multi ? A[st.key].includes(v) : A[st.key] === v;
      return `<button class="opt${multi ? ' multi' : ''}${sel ? ' sel' : ''}" data-v="${v}"><span class="dot"></span><span><b>${esc(l)}</b></span></button>`;
    }).join('')}</div>`;
  }
  $('#step').innerHTML = `<div class="q"><h2>${esc(st.title)}</h2>${st.sub ? `<p class="sub">${esc(st.sub)}</p>` : '<div style="height:20px"></div>'}${body}<div id="react"></div></div>`;
  $('#nextBtn').innerHTML = at === STEPS.length - 1 ? 'See what Joel would say <span>→</span>' : 'Continue <span>→</span>';
  $('#aside').innerHTML = '';

  if (st.type === 'money') {
    const inp = $('#num');
    const read = () => {
      const n = parseInt(inp.value.replace(/[^0-9]/g, ''), 10);
      const p = document.querySelector('.per .on')?.dataset.p || 'm';
      if (n > 0) A[st.key] = { n, p }; else delete A[st.key];
      react(); validate();
    };
    inp.addEventListener('input', read);
    document.querySelectorAll('.per button[data-p]').forEach(b => b.addEventListener('click', () => {
      document.querySelectorAll('.per button').forEach(x => x.classList.toggle('on', x === b)); read();
    }));
    read();
  } else {
    document.querySelectorAll('.opt').forEach(o => o.addEventListener('click', () => {
      const v = o.dataset.v;
      if (st.type === 'multi') {
        A.end = A.end.includes(v) ? A.end.filter(x => x !== v) : [...A.end, v];
        o.classList.toggle('sel');
        validate();
      } else {
        A[st.key] = v;
        document.querySelectorAll('.opt').forEach(x => x.classList.toggle('sel', x === o));
        validate(); setTimeout(next, 260);
      }
    }));
    validate();
  }
}

// Joel's live reaction on the number questions
function react() {
  const r = $('#react'); if (!r) return;
  const st = STEPS[at];
  if (st.key === 'level' && A.level) {
    r.innerHTML = `<div class="joel">“The only reason I ask you all what you earn is because it just shows me where you're programmed.” <b>Joel</b></div>`;
  } else if (st.key === 'goal' && A.goal && A.level) {
    const k = goalKind();
    r.innerHTML = `<div class="joel">${{ small: `You already know how to make ${money(yearly())} a year. Joel would say that's not a good goal, and tell you to go for ${money(yearly())} a month.`,
      fair: `${money(A.goal.n)} a month. Joel would say: “That's not a fairy tale.”`,
      huge: `Big. Joel would start you on ${money(yearly())} a month first, then go for it.` }[k]}</div>`;
  } else r.innerHTML = '';
}
function validate() {
  const st = STEPS[at];
  $('#nextBtn').disabled = st.type === 'money' ? !A[st.key] : st.type === 'multi' ? A.end.length === 0 : !A[st.key];
}
function next() {
  if ($('#nextBtn').disabled) return;
  if (at < STEPS.length - 1) { at++; renderStep(); window.scrollTo({ top: 0 }); }
  else { renderResult(); show('result'); }
}

// ---------- Joel's maths: turn your yearly income into a monthly income ----------
const yearly = () => A.level.p === 'y' ? A.level.n : A.level.n * 12;
function goalKind() {
  const y = yearly(), g = A.goal.n;
  if (g > y * 5) return 'huge';
  if (g < y * 0.8) return 'small';
  return 'fair';
}
const cardGoal = () => goalKind() === 'fair' ? A.goal.n : yearly();
function dateIn90() { const d = new Date(); d.setDate(d.getDate() + 90); return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }); }
const LONG = { 1: 'about a year', 2: 'one or two years', 3: 'three years', 5: 'longer than three years' };
const card = (h3, h2, intro, left, right) =>
  `<div class="card"><h3>${h3}</h3>${h2 ? `<h2>${h2}</h2>` : ''}${intro ? `<p class="intro">${intro}</p>` : ''}<div class="split">${left}<div class="stack">${right}</div></div></div>`;

function renderResult() {
  const lvl = A.level.p === 'y' ? `${money(A.level.n)} a year` : `${money(A.level.n)} a month`;
  const k = goalKind(), g = cardGoal();

  const numberCard = card('Your number', 'It shows where you\'re programmed.', `${lvl}, for ${LONG[A.long]}.`,
    clip(+A.long >= 3 ? 'stuck' : 'num'), say('programmed') + say(+A.long >= 3 ? 'notalone' : 'honest'));

  const goalBits = {
    small: ['That\'s not a good goal.', `You already know how to make ${money(yearly())} a year. So Joel would do what his mentor did to him: turn your yearly income into a monthly income.`, 'cam', 'gradualq'],
    fair: ['That\'s not a fairy tale.', `${money(A.goal.n)} a month. Put it on a goal card, in present tense, with a date on it.`, 'samuel', 'scare'],
    huge: ['Start with your yearly income as a month.', `${money(A.goal.n)} a month is a big goal. Joel would start you on ${money(yearly())} a month first, so your mind can believe it, then go for the big one.`, 'jerry', 'scare'],
  }[k];
  const goalCard = `<div class="card"><h3>Your goal</h3><h2>${goalBits[0]}</h2><p class="intro">${goalBits[1]}</p>
    <div class="goalcard"><div class="gh">Goal card</div><div class="gt">I am so happy and grateful now that I am earning ${money(g)} every single month.</div>
      <div class="gd">by ${dateIn90()}</div><div class="back">${esc(Q.cardback.t)}</div></div>
    <div class="split">${clip(goalBits[2])}<div class="stack">${say(goalBits[3])}${say('carry')}</div></div></div>`;

  const whyCard = card('Why you want it', 'If it was already guaranteed, how would you show up today?', '', clip('mario'), say('tryon'));

  const st = { heavy: ['It shouldn\'t feel this heavy.', 'heavy', 'feelgood'], slips: ['It slips back to what your mind is set to.', 'slips', 'mindset'],
               knowall: ['Knowing it isn\'t doing it.', 'knowall', 'gap'], scared: ['That fear is the paradigm.', 'scared', 'mindset'],
               buy: ['You\'re expecting them not to buy.', 'buy', 'assuming'] }[A.struggle];
  const struggleCard = card('Your biggest struggle', st[0], '', clip(st[1]), say(st[2]));

  const changeCard = card('What needs to change', A.change === 'me' ? 'You\'re right.' : 'It\'s none of them.', '', clip('change'), say(A.change === 'me' ? 'onlyproblem' : 'nonethem'));

  const IAM = { notgood: 'I am not good enough', unlucky: 'I am unlucky', hard: 'I am finding it hard to grow my business', behind: 'I am always behind' };
  const iamCard = A.iam === 'magnet'
    ? card('After “I am”', 'Love that. Keep saying it.', '', clip('peter'), say('magnet'))
    : `<div class="card mirror"><h3>After “I am”</h3><h2>That's an affirmation. Swap it.</h2>
        <div class="swap"><div class="old"><small>Old</small><s>“${esc(IAM[A.iam])}”</s></div><div class="arr">→</div><div><small>Joel's</small>“I am a magnet to money”</div></div>
        <div class="split">${clip('peter')}<div class="stack">${say('afterIam')}${say('magnet')}</div></div></div>`;

  const bl = { hard: ['Money is not hard to earn.', 'hardearn', 'hardnot'], work: ['Hard work doesn\'t create money.', 'hardearn', 'hardnot'],
               evil: ['Money just is.', 'evil', 'amplifier'], afford: ['That sentence was never yours.', 'afford', 'fearlogic'],
               taboo: ['It\'s taboo in loads of households.', 'taboo', 'wonderful'] }[A.belief];
  const beliefCard = card('The belief you grew up with', bl[0], '', clip(bl[1]), say(bl[2]));

  const NOW = { frustrated: 'frustrated', angry: 'angry', loop: 'in a loop', scraping: 'like you\'re scraping by', fine: 'fine, but wanting more' };
  const END = { relieved: 'relieved', grateful: 'grateful', happy: 'happy', calm: 'calm', free: 'free', proud: 'proud' };
  const endWords = A.end.map(e => END[e]);
  const feelCard = `<div class="card mirror"><h3>How you feel</h3><h2>You attract what you are.</h2>
    <div class="swap"><div class="old"><small>Right now</small><s>${esc(NOW[A.now])}</s></div><div class="arr">→</div><div><small>When it's done</small>${esc(endWords.join(', '))}</div></div>
    <p class="intro">Ask yourself, a few times a day: if I was earning ${money(g)} a month right now, how would I feel? Then feel ${esc(endWords[0])}, now.</p>
    <div class="split">${clip('attract')}<div class="stack">${say('attractare')}${say('howfeel')}</div></div></div>`;

  const md = { afford: ['How am I going to afford this?', 'loan', 'butq'], time: ['I don\'t have the time.', 'notime', 'timeq'], alone: ['I can do this on my own.', 'boxer', 'bigger'],
               fail: ['What if it doesn\'t work?', 'fear', 'fearq'], ready: ['Nothing. I\'m ready.', 'able', 'ableq'] }[A.mind];
  const mindCard = card('What your mind is telling you', `“${esc(md[0])}”`, '', clip(md[1]), say(md[2]));

  const cm = { 10: ['10. Good.', 'willing', 'ableq'], 9: ['9.', 'nine', 'nineq'], 8: ['7 or 8.', 'nine', 'nineq'], 6: ['6 or less.', 'interested', 'interestedq'], int: ['Interested.', 'interested', 'interestedq'] }[A.committed];
  const commitCard = card('How committed you are', cm[0], '', clip(cm[1]), say(cm[2]));

  const plan = `<div class="card"><h3>What Joel gets his clients to do</h3><h2>Start tonight.</h2>
    <ul class="plan">
      <li><div class="d">Goal card</div><div><div class="w">Carry it everywhere. Read it when you wake up and before you sleep.</div><div class="h">“I am so happy and grateful now that I am earning ${money(g)} every single month.”</div></div></li>
      <li><div class="d">Write it</div><div><div class="w">Write it out every morning and every night.</div><div class="h">You won't believe it at first. Keep writing it.</div></div></li>
      <li><div class="d">Who you are</div><div><div class="w">Write a page about the version of you who already earns ${money(g)} a month.</div><div class="h">How do they think, feel, act, dress? Record it and listen four times a day.</div></div></li>
      <li><div class="d">Before bed</div><div><div class="w">Write down six things that move you towards the goal tomorrow.</div><div class="h">Do the hardest one first. One at a time until it's done.</div></div></li>
      <li><div class="d">When it goes wrong</div><div><div class="w">Say “that's good”.</div><div class="h">No matter what it is.</div></div></li>
    </ul>
    <div class="split" style="margin-top:18px">${clip('selfimage')}<div class="stack">${say('selfscript')}${say('thatsgood')}</div></div></div>`;

  $('#result').innerHTML = `
    <div class="rhead"><div class="eyebrow"><i></i>On Call</div><h1>Here's what Joel would say to you.</h1>
      <div class="facts"><span>Now <b>${lvl}</b></span><span>Stuck <b>${LONG[A.long]}</b></span><span>Goal <b>${money(g)} a month</b></span></div></div>
    ${numberCard}${goalCard}${whyCard}${struggleCard}${changeCard}${iamCard}${beliefCard}${feelCard}${mindCard}${commitCard}${plan}
    <div class="card" style="text-align:center"><p class="intro" style="margin:0 0 6px">If you're a bit interested, the call isn't for you.</p>${say('callfilter')}</div>
    <div class="actions">
      <a class="btn pri" href="https://joelmccleoudcoaching.com/call" target="_blank" rel="noopener">Book a call with Joel →</a>
      <button class="btn" id="copyBtn">Copy my goal card</button>
      <button class="btn" id="againBtn">Start again</button>
    </div>`;

  $('#againBtn').onclick = () => { Object.keys(A).forEach(x => delete A[x]); A.end = []; at = 0; renderStep(); show('quiz'); };
  $('#copyBtn').onclick = () => {
    const txt = `I am so happy and grateful now that I am earning ${money(g)} every single month.\nby ${dateIn90()}\n\n${Q.cardback.t}`;
    navigator.clipboard?.writeText(txt).then(() => toast('Goal card copied'), () => toast('Copy not allowed here'));
  };
}
function toast(m) { const t = $('#toast'); t.textContent = m; t.classList.add('on'); setTimeout(() => t.classList.remove('on'), 1800); }

// ---------- wire up ----------
$('#introClip').innerHTML = clip('cam');
$('#startBtn').onclick = () => { at = 0; renderStep(); show('quiz'); };
$('#nextBtn').onclick = next;
$('#backBtn').onclick = () => { if (at > 0) { at--; renderStep(); } else show('intro'); };
document.addEventListener('keydown', e => { if (e.key === 'Enter' && $('#quiz').classList.contains('on')) next(); });
