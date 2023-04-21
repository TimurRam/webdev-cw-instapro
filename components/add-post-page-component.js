import { renderUploadImageComponent } from './upload-image-component.js'
import { renderHeaderComponent } from './header-component.js'
import { postPosts } from '../api.js'
import { getToken } from '../index.js'
import { safeInput } from '../helpers.js'

export function renderAddPostPageComponent ({ appEl, onAddPostClick }) {
  const render = () => {
    let imageUrl = ''
    // TODO: Реализовать страницу добавления поста
    const appHtml = `
      <div class='page-container'>
        <div class='header-container'></div>

        <h3 class='form-title'>Добавить пост</h3>
        <div class='form-inputs'>
          <div class='upload-image-container'></div>

          <label>
            Опишите фотографию:
            <textarea id="textarea" class='input textarea' rows='4'></textarea>
          </label>
          <button class='button' id='add-button'>
            Добавить
          </button>
        </div>
      </div>`

    appEl.innerHTML = appHtml
    renderHeaderComponent({
      element: document.querySelector('.header-container')
    })
    renderUploadImageComponent({
      element: appEl.querySelector('.upload-image-container'),
      onImageUrlChange (newImageUrl) {
        imageUrl = newImageUrl
      }
    })

    document.getElementById('add-button').addEventListener('click', () => {
      if (!imageUrl) {
        alert('Не выбрано фото')
        return
      }

      if (!document.getElementById('textarea').value) {
        alert('Добавьте описание')
        return
      }

      postPosts({
        token: getToken(),
        description: safeInput(document.getElementById('textarea').value),
        imageUrl: imageUrl
      }).then(() => {
        return onAddPostClick({
          description: safeInput(document.getElementById('textarea').value),
          imageUrl: imageUrl
        })
      })
    })
  }
  render()
}
// Что осталось доделать, чтобы повторить конкурентов

// Интегрировать верстку списка постов с API.(+)
// Реализовать страницу добавления поста.(+)
// Реализовать страницу с постами конкретного юзера.(+)
// Реализовать функционал лайков.
