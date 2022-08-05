import React from 'react'
import ArrowIcon from '../../../Icons/ArrowIcon'
export default function FacebookDesc() {
  return (
<>
   <div className="flex flex-col space-y-5 max-w-xl ">
          <div className="flex flex-col spacey-y-2">
            {/* Title */}
          <span className="text-gray-100 text-lg font-mono">Software Developer <span 
          className="text-AAsecondary">@ Facebook</span></span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">January - June 2017</span>
          </div>
          
          {/* Desctiption 1 */}
          <div className="flex flex-row space-x-4">
            <ArrowIcon className={" h-5 w-8 text-AAsecondary"} />
            <span className="text-gray-500 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam minima nemo vel nam magni! Molestiae quae ea quo voluptate asperiores libero aperiam, reiciendis non, quod vero a consectetur delectus ab?</span>
          </div>
          {/* Desctiption 1 */}
          <div className="flex flex-row space-x-4">
            <ArrowIcon className={" h-5 w-8 text-AAsecondary"} />
            <span className="text-gray-500 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus labore vel cum, neque aliquam sunt accusamus dolor, itaque aperiam, quod deserunt reiciendis praesentium? Consectetur, quis vero accusamus quia quam neque.</span>
          </div>
        </div>
    </>
  )
}
