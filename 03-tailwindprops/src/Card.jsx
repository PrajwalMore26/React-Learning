import React from 'react'

function Card(props) {
  return (
    <div>
      <figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
        <img class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://images.pexels.com/photos/27409685/pexels-photo-27409685/free-photo-of-us-in-oneplus.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />
        <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <p class="text-lg font-medium">
            A psychology enthusiast with a penchant for critical thinking, I'm a free-spirited soul drawn to the serenity of mountains and lakes. Cricket and music are my passions, while writing is my escape. Currently, I'm diving into the world of coding, all in the name of love (and parental approval!).
            </p>
          </blockquote>
          <figcaption class="font-medium">
            <div class="text-sky-500 dark:text-sky-400">
              {props.username}
            </div>
            <div class="text-slate-700 dark:text-slate-500">
              Soon to be a Full Stack Dev.
            </div>
          </figcaption>
        </div>
      </figure>
    </div>
  )
}

export default Card