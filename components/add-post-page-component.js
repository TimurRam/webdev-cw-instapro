import { user } from '../index.js'
import { goToPage, logout } from '../index.js'
import { POSTS_PAGE } from '../routes.js'
import { uploadImage, postPosts } from '../api.js'

export function renderAddPostPageComponent ({
  appEl,
  onAddPostClick,
  onImageUrlChange
}) {
  let imageUrl = ''
  const render = () => {
    // TODO: Реализовать страницу добавления поста
    const appHtml = `
    <div class="page-container">
      <div class="header-container">
      <div class="page-header">
    <h1 class="logo">instapro</h1>
    <button class="header-button add-or-login-button">
    <div title="Добавить пост" class="add-post-sign"></div>
    </button>
   <button title="${user.name}" class="header-button logout-button">Выйти</button>
    </button>
</div>
      <div class="form">
        <h3 class="form-title">Добавить пост</h3>
        <div class="form-inputs">
          <div class="upload-image-container">
          <div class="upload=image">
          ${
            imageUrl
              ? `
              <div class="file-upload-image-conrainer">
                <img class="file-upload-image" src="${imageUrl}">
                <button class="file-upload-remove-button button">Заменить фото</button>
              </div>
              `
              : `
                <label class="file-upload-label secondary-button">
                    <input
                      type="file"
                      class="file-upload-input"
                      style="display:none"
                    />
                    Выберите фото
                </label>
              
          `
          }
      </div>
          <label>
            Опишите фотографию:
            <textarea class="input textarea" rows="4"></textarea>
            </label>
            <button class="button" id="add-button">Добавить</button>
        </div>
      </div>
      </div>
    </div>
  `

    appEl.innerHTML = appHtml
    const descriptionImage = document.querySelector('.input.textarea');
    console.log(descriptionImage.value);
    const fileInputElement = document.querySelector('.file-upload-input');
    

    document.getElementById('add-button').addEventListener('click', () => {
      onAddPostClick({
        description:descriptionImage.value,
        imageUrl
      })
    })
    
    fileInputElement?.addEventListener('change', () => {
      const file = fileInputElement.files[0]
      if (file) {
        const lableEl = document.querySelector('.file-upload-label')
        lableEl.setAttribute('disabled', true)
        lableEl.textContent = 'Загружаю файл...'
        uploadImage({ file }).then(({ fileUrl }) => {
          console.log(fileUrl)
          // onImageUrlChange(imageUrl);

          imageUrl = fileUrl
          console.log(imageUrl);
          render()
        })
      }
    })

    appEl
      .querySelector('.file-upload-remove-button')
      ?.addEventListener('click', () => {
        imageUrl = ''
        // onImageUrlChange(imageUrl);
        render()
      })
  }
  render()
  document.querySelector('.logout-button').addEventListener('click', () => {
    logout()
  })

  document.querySelector('.logo').addEventListener('click', () => {
    goToPage(POSTS_PAGE)
  })
}

// Что осталось доделать, чтобы повторить конкурентов

// Интегрировать верстку списка постов с API.
// Реализовать страницу добавления поста.
// Реализовать страницу с постами конкретного юзера.
// Реализовать функционал лайков.
