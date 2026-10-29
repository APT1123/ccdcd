import { useState } from 'react'

type Command = 'move' | 'right' | 'left'
type Direction = 0 | 1 | 2 | 3
type Point = { x: number; y: number }

const commandLabels: Record<Command, string> = {
  move: 'Move Forward',
  right: 'Turn Right',
  left: 'Turn Left',
}

const commandIcons: Record<Command, string> = {
  move: '↑',
  right: '↱',
  left: '↰',
}

const directionSteps: Point[] = [
  { x: 0, y: -1 },
  { x: 1, y: 0 },
  { x: 0, y: 1 },
  { x: -1, y: 0 },
]

const startPosition = { x: 1, y: 2 }
const startDirection: Direction = 0
const target = { x: 2, y: 1 }
const obstacle = { x: 1, y: 0 }

const wait = (duration: number) => new Promise((resolve) => window.setTimeout(resolve, duration))
const samePoint = (first: Point, second: Point) => first.x === second.x && first.y === second.y

function Robot({ direction, running }: { direction: Direction; running: boolean }) {
  const directionClasses: Record<Direction, string> = {
    0: 'rotate-0',
    1: 'rotate-90',
    2: 'rotate-180',
    3: '-rotate-90',
  }

  return (
    <div className={`relative w-9 h-10 sm:w-11 sm:h-12 drop-shadow-sm transition-transform duration-300 ${running ? 'scale-105' : ''}`} aria-label="Robot">
      <span
        className={`absolute -top-2 left-1/2 -translate-x-1/2 text-primary text-xs transition-transform duration-300 ${directionClasses[direction]}`}
        aria-label={['Facing up', 'Facing right', 'Facing down', 'Facing left'][direction]}
      >
        ▲
      </span>
      <div className="absolute top-1 left-1/2 -translate-x-1/2 w-7 h-6 sm:w-9 sm:h-7 rounded-lg bg-white border-2 border-gray-800">
        <div className="flex justify-center gap-1.5 mt-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
        </div>
      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-5 sm:w-10 sm:h-6 rounded-lg bg-primary border-2 border-gray-800">
        <span className="absolute left-1/2 top-1 -translate-x-1/2 w-2 h-2 rounded-full bg-white/90" />
      </div>
    </div>
  )
}

export default function CodelyDemo() {
  const [commands, setCommands] = useState<Command[]>(['move', 'right', 'move'])
  const [robot, setRobot] = useState<Point>(startPosition)
  const [direction, setDirection] = useState<Direction>(startDirection)
  const [activeCommand, setActiveCommand] = useState<number | null>(null)
  const [step, setStep] = useState(0)
  const [status, setStatus] = useState<'ready' | 'running' | 'failed' | 'complete'>('ready')
  const [message, setMessage] = useState('Ready to run your instructions.')

  const prepareForEdit = () => {
    setStatus('ready')
    setActiveCommand(null)
    setStep(0)
    setMessage('Program changed. Run it to observe the result.')
  }

  const addCommand = (command: Command) => {
    if (commands.length >= 7 || status === 'running') return
    setCommands((current) => [...current, command])
    prepareForEdit()
  }

  const removeCommand = (index: number) => {
    if (status === 'running') return
    setCommands((current) => current.filter((_, commandIndex) => commandIndex !== index))
    prepareForEdit()
  }

  const reorderCommand = (index: number, offset: -1 | 1) => {
    const nextIndex = index + offset
    if (nextIndex < 0 || nextIndex >= commands.length || status === 'running') return
    setCommands((current) => {
      const next = [...current]
      const selected = next[index]
      next[index] = next[nextIndex]
      next[nextIndex] = selected
      return next
    })
    prepareForEdit()
  }

  const reset = () => {
    if (status === 'running') return
    setCommands(['move', 'right', 'move'])
    setRobot(startPosition)
    setDirection(startDirection)
    setActiveCommand(null)
    setStep(0)
    setStatus('ready')
    setMessage('Ready to run your instructions.')
  }

  const runProgram = async () => {
    if (!commands.length || status === 'running') return

    let currentPosition = startPosition
    let currentDirection = startDirection
    let stopReason = ''

    setRobot(startPosition)
    setDirection(startDirection)
    setStatus('running')
    setMessage('Running your program…')
    setStep(0)
    await wait(350)

    for (let index = 0; index < commands.length; index += 1) {
      const command = commands[index]
      setActiveCommand(index)
      setStep(index + 1)
      await wait(350)

      if (command === 'right') {
        currentDirection = ((currentDirection + 1) % 4) as Direction
        setDirection(currentDirection)
      } else if (command === 'left') {
        currentDirection = ((currentDirection + 3) % 4) as Direction
        setDirection(currentDirection)
      } else {
        const nextPosition = {
          x: currentPosition.x + directionSteps[currentDirection].x,
          y: currentPosition.y + directionSteps[currentDirection].y,
        }
        const outsideGrid = nextPosition.x < 0 || nextPosition.x > 3 || nextPosition.y < 0 || nextPosition.y > 3

        if (samePoint(nextPosition, obstacle)) {
          stopReason = 'The robot stopped at the obstacle.'
          break
        }
        if (outsideGrid) {
          stopReason = 'The robot stopped at the edge of the grid.'
          break
        }

        currentPosition = nextPosition
        setRobot(currentPosition)
      }

      await wait(500)
    }

    setActiveCommand(null)
    if (!stopReason && samePoint(currentPosition, target)) {
      setStatus('complete')
      setMessage('Program complete.')
    } else {
      setStatus('failed')
      setMessage(stopReason || 'The program ended before the robot reached the target.')
    }
  }

  return (
    <section className="py-20 bg-[#FFF5F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div>
            <div className="section-label mb-3">TRY CODELY</div>
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-4">
              Code it. Run it. <span className="text-[#E8401C]">Fix it.</span>
            </h2>
            <p className="text-gray-600 leading-relaxed max-w-lg mb-7">
              Write a few simple instructions, run your program, and see exactly how your code changes what the robot does.
            </p>

            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Build your program</p>
            <div className="flex flex-wrap gap-2 mb-5">
              {(Object.keys(commandLabels) as Command[]).map((command) => (
                <button
                  key={command}
                  type="button"
                  onClick={() => addCommand(command)}
                  disabled={commands.length >= 7 || status === 'running'}
                  className="rounded-xl bg-white border border-gray-200 px-4 py-3 text-sm font-bold text-gray-800 hover:border-[#E8401C] hover:text-[#E8401C] disabled:opacity-40 transition-colors"
                >
                  <span className="text-[#E8401C] mr-2" aria-hidden="true">{commandIcons[command]}</span>
                  {commandLabels[command]}
                </button>
              ))}
            </div>

            <ol className="space-y-2 mb-5" aria-label="Program instructions">
              {commands.length ? commands.map((command, index) => (
                <li
                  key={`${command}-${index}`}
                  className={`flex items-center rounded-xl border px-3 py-2.5 transition-colors ${
                    activeCommand === index ? 'border-[#E8401C] bg-white shadow-sm' : 'border-red-100 bg-white/70'
                  }`}
                >
                  <span className="w-6 text-xs font-black text-gray-400">{index + 1}.</span>
                  <span className="flex-1 text-sm font-semibold text-gray-800">{commandLabels[command]}</span>
                  <button
                    type="button"
                    onClick={() => reorderCommand(index, -1)}
                    disabled={index === 0 || status === 'running'}
                    className="px-2 text-sm font-bold text-gray-400 hover:text-gray-800 disabled:opacity-20"
                    title="Move instruction up"
                  >
                    ↑
                  </button>
                  <button
                    type="button"
                    onClick={() => reorderCommand(index, 1)}
                    disabled={index === commands.length - 1 || status === 'running'}
                    className="px-2 text-sm font-bold text-gray-400 hover:text-gray-800 disabled:opacity-20"
                    title="Move instruction down"
                  >
                    ↓
                  </button>
                  <button
                    type="button"
                    onClick={() => removeCommand(index)}
                    disabled={status === 'running'}
                    className="ml-1 w-7 h-7 rounded-lg text-gray-400 hover:bg-red-50 hover:text-[#E8401C] disabled:opacity-20"
                    title="Remove instruction"
                  >
                    ×
                  </button>
                </li>
              )) : (
                <li className="rounded-xl border border-dashed border-red-200 px-4 py-3 text-sm text-gray-400">
                  Add an instruction to begin.
                </li>
              )}
            </ol>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={runProgram}
                disabled={!commands.length || status === 'running'}
                className="rounded-full bg-[#E8401C] px-6 py-3 text-sm font-bold text-white hover:bg-[#C73516] disabled:opacity-40 transition-colors"
              >
                {status === 'running' ? 'Running…' : 'Run Program →'}
              </button>
              <button
                type="button"
                onClick={reset}
                disabled={status === 'running'}
                className="px-3 py-2 text-sm font-bold text-gray-500 hover:text-gray-900 disabled:opacity-40"
              >
                Reset
              </button>
            </div>

            <p className="mt-6 text-xs font-bold uppercase tracking-wider text-gray-400">
              Think <span className="text-[#E8401C]">→</span> Code <span className="text-[#E8401C]">→</span> Run <span className="text-[#E8401C]">→</span> Improve
            </p>
          </div>

          <div className="bg-white border border-red-100 rounded-3xl shadow-sm overflow-hidden">
            <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
              <div>
                <p className="text-xs font-bold text-[#E8401C] uppercase tracking-widest mb-1">Program Output</p>
                <p className="text-xs text-gray-400">Interactive homepage demonstration</p>
              </div>
              <span className="text-xs font-semibold text-gray-400">4 × 4 grid</span>
            </div>

            <div className="p-5 sm:p-7">
              <div className="grid grid-cols-4 gap-2 rounded-2xl bg-[#FFF5F2] p-3 mb-5" aria-label="Program output grid">
                {Array.from({ length: 16 }, (_, cellIndex) => {
                  const point = { x: cellIndex % 4, y: Math.floor(cellIndex / 4) }
                  return (
                    <div key={cellIndex} className="relative aspect-square rounded-xl border border-red-100 bg-white/80 flex items-center justify-center">
                      {samePoint(point, obstacle) && (
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gray-700 border-b-4 border-gray-900 shadow-sm" aria-label="Obstacle" />
                      )}
                      {samePoint(point, target) && (
                        <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-full border-4 border-[#E8401C] bg-white shadow-sm" aria-label="Target" />
                      )}
                      {samePoint(point, robot) && <Robot direction={direction} running={status === 'running'} />}
                    </div>
                  )
                })}
              </div>

              <div className="rounded-2xl bg-gray-950 px-4 py-3.5 min-h-20">
                {status === 'running' && (
                  <p className="text-xs font-bold text-[#E8401C] mb-1">Running step {step} of {commands.length}…</p>
                )}
                <p
                  className={`text-sm font-semibold ${
                    status === 'complete' ? 'text-green-400' : status === 'failed' ? 'text-orange-300' : 'text-gray-300'
                  }`}
                  aria-live="polite"
                >
                  {message}
                </p>
                {status === 'failed' && (
                  <p className="text-xs text-gray-400 mt-1">Change your program and run it again.</p>
                )}
              </div>

              {status === 'complete' && (
                <p className="mt-4 text-xs font-semibold text-gray-500">Sequencing · Logic · Problem Solving</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
