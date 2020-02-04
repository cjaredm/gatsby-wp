import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import LabelInput from '../components/LabelInput';
import RadioCheck from '../components/RadioCheck';
import Button from '../components/Button';

export default () => (
	<Layout>
		<SEO title='Style Guide' />
		<h1>Style Guide</h1>

		<div className='wysiwyg-content'>
			<h2 className='style-guide__heading'>Colors</h2>

			<div className='style-guide__colors-container'>
				<div className='style-guide__colors-group'>
					<h3>Primary</h3>
					<ul className='style-guide__colors'>
						<li className='style-guide__color h-color-primary'>Primary</li>
						<li className='style-guide__color h-color-secondary'>Secondary</li>
						<li className='style-guide__color h-color-tertiary'>Tertiary</li>
					</ul>
				</div>

				<div className='style-guide__colors-group'>
					<h3>Theme</h3>
					<ul className='style-guide__colors'>
						<li className='style-guide__color h-color-theme-white h-color-border h-color-black'>Theme White</li>
						<li className='style-guide__color h-color-theme-black'>Theme Black</li>
						<li className='style-guide__color h-color-theme-gray'>Theme Gray</li>
					</ul>
				</div>

				<div className='style-guide__colors-group'>
					<h3>Alert</h3>
					<ul className='style-guide__colors'>
						<li className='style-guide__color h-color-error'>Error</li>
						<li className='style-guide__color h-color-warning'>Warning</li>
						<li className='style-guide__color h-color-success'>Success</li>
					</ul>
				</div>
			</div>

			<div>
				<div>
					<h2 className='style-guide__heading'>Headings</h2>
					<h1>Heading - h1</h1>
					<h2>Heading - h2</h2>
					<h3>Heading - h3</h3>
					<h4>Heading - h4</h4>
					<h5>Heading - h5</h5>
					<h6>Heading - h6</h6>
				</div>
			</div>

			<div>
				<h2 className='style-guide__heading'>Buttons</h2>
        <div>
          <Button variant="fill" color="primary">Fill</Button>
          <Button variant="fill" color="secondary">Fill</Button>
          <Button variant="fill" color="tertiary">Fill</Button>
        </div>

        <div>
          <Button variant="outline" color="primary">Outline</Button>
          <Button variant="outline" color="secondary">Outline</Button>
          <Button variant="outline" color="tertiary">Outline</Button>
        </div>

        <div>
          <Button variant="text" color="primary">Text</Button>
          <Button variant="text" color="secondary">Text</Button>
          <Button variant="text" color="tertiary">Text</Button>
        </div>

        <div>
          <Button variant="fill" color="primary" disabled>Disabled</Button>
          <Button variant="fill" color="secondary" disabled>Disabled</Button>
          <Button variant="fill" color="tertiary" disabled>Disabled</Button>
        </div>

        <div>
          <Button variant="outline" color="primary" disabled>Disabled</Button>
          <Button variant="outline" color="secondary" disabled>Disabled</Button>
          <Button variant="outline" color="tertiary" disabled>Disabled</Button>
        </div>
        <div>
          <Button variant="text" color="primary" disabled>Disabled</Button>
          <Button variant="text" color="secondary" disabled>Disabled</Button>
          <Button variant="text" color="tertiary" disabled>Disabled</Button>
        </div>

        <div>
          <Button as="a" variant="fill" href="#" color="primary">As A Tag</Button>
          <Button as="a" variant="outline" href="#" color="secondary">As A Tag</Button>
          <Button as="a" variant="text" href="#" color="tertiary">As A Tag</Button>
          <Button as="a" variant="fill" href="#" color="tertiary" disabled>As A Tag</Button>
        </div>
				<p>
					<a className='button' href='/'>
						a .button
					</a>
				</p>
        <p>
					<a className='button' href='/' disabled>
						a .button disabled
					</a>
				</p>
				<p>
					<button className='button'>.button</button>
				</p>
				<p>
					<button className='button button--secondary'>.button .button--secondary</button>
				</p>

				<p>
					<button className='button button--tertiary'>.button .button--tertiary</button>
				</p>
				<p>
					<button className='button button--outline'>.button .button--outline</button>
				</p>
        <p>
					<button className='button button--outline' disabled>.button .button--outline disabled</button>
				</p>
        <p>
					<button className='button button--outline button--secondary'>.button .button--outline</button>
				</p>
        <p>
					<button className='button button--outline button--tertiary'>.button .button--outline</button>
				</p>
				<p>
					<button className='button button--full-width'>
						Button .button .button--full-width
					</button>
				</p>
				<p>
					<button>Button</button>
				</p>
				<p>
					<button disabled>Button - &lt;button disabled&gt;</button>
				</p>
			</div>

			<div>
				<h2 className='style-guide__heading'>Text</h2>
				<h1>Heading - h1</h1>
				<p>
					He is here... Obi-Wan Kenobi! What makes you think so? A tremor in the =ce. The last time I felt
					it was in the presence of my old master. Surely he must be dead by now. Don't underestimate the
					power of the Force. The Jedi are extinct, their fire has gone out of the universe. You, my friend,
					are all that's left of their religion. Yes. Governor Tarkin, we have an emergency alert in detention
					block A A-twenty-three. The princess! Put all sections on alert!
				</p>

				<h2>Heading - h2</h2>
				<p>
					Where could they be? Close the blast doors! Open the blast doors! Open the blast doors! I've been
					waiting for you, Obi-Wan. We meet again, at last. The circle is now complete. When I left you, I was
					but the learner, now I am the master. Only a master of evil, Darth. Your powers are weak, old man.
					You can't win, Darth. If you strike me down, I shall become more powerful than you can possibly
					imagine.
				</p>

				<h3>Heading - h3</h3>
				<p>
					Did you find any droids? No, sir. If there were any on board, they must also have jettisoned. Send a
					scanning crew on board. I want every part of this ship checked. Yes, sir. I sense something...a
					presence I haven't felt since... Get me a scanning crew in here on the double.
				</p>

				<h4>Heading - h4</h4>
				<p>
					The ship's all yours. If the scanners pick up anything, report it immediately. All right, let's go.
					Hey down there, could you give us a hand with this? TX-four-one-two. Why aren't you at your post?
					TX-four-one-two, do you copy?
				</p>

				<h5>Heading - h5</h5>
				<p>
					Take over. We've got a bad transmitter. I'll see what I can do. You know, between his howling and
					your blasting everything in sight, it's a wonder the whole station doesn't know we're here. Bring
					them on!
				</p>

				<h6>Heading - h6</h6>
				<p>
					I prefer a straight fight to all this sneaking around. We found the computer outlet, sir. Plug in.
					He should be able to interpret the entire Imperial computer network.
				</p>

				<p>
					<b>Text - Bold - &lt;b&gt;</b>
				</p>
				<p>
					<strong>Text - Bold - &lt;strong&gt;</strong> - SEO
				</p>
				<p>
					<em>Text - Italicized - &lt;em&gt;</em> - SEO
				</p>
				<p>
					<s>Text - Strike - &lt;s&gt;</s>
				</p>
				<p>
					<span style={{ textDecoration: 'underline' }}>Text - Underlined</span>
				</p>
				<p>
					Text -{' '}
					<a href='/' target='_blank' rel='noopener noreferrer' title='Example'>
						Hyperlink
					</a>
				</p>
				<blockquote>
					"Text - Blockquote" - Author
					<cite>Cite</cite>
				</blockquote>
			</div>
			<div>
				<h2 className='style-guide__heading'>Lists</h2>
				<strong>Un-ordered List</strong>
				<ul>
					<li>List item 1</li>
					<li>List item 2</li>
					<li>List item 3</li>
				</ul>

				<strong>Ordered List</strong>
				<ol>
					<li>List item 1</li>
					<li>List item 2</li>
					<li>List item 3</li>
				</ol>
			</div>

			<div>
				<h2 className='style-guide__heading'>Table</h2>
				<table>
					<caption>Star Wars Table Caption</caption>
					<thead>
						<tr>
							<th>Name</th>
							<th>Side</th>
							<th>Role</th>
						</tr>
					</thead>

					<tbody>
						<tr>
							<td>Darth Vader</td>
							<td>Dark</td>
							<td>Sith</td>
						</tr>

						<tr>
							<td>Obi Wan Kenobi</td>
							<td>Light</td>
							<td>Jedi</td>
						</tr>

						<tr>
							<td>Greedo</td>
							<td>South</td>
							<td>Scumbag</td>
						</tr>
					</tbody>

					<tfoot>
						<tr>
							<th>Name</th>
							<th>Side</th>
							<th>Role</th>
						</tr>
					</tfoot>
				</table>
			</div>

			<div>
				<h2 className='style-guide__heading'>Form</h2>
				<form action='/' method='post' className='form'>
          <LabelInput name="test" label="Label - Text" onChange={() => {}} placeholder="Something goes here..." />

					<RadioCheck type="radio" name="custom-radio" onChange={() => {}} label="Label - radio" value='label-radio' placeholder="Something goes here..." checked/> 

					<div className='form__section'>
          <RadioCheck type="radio" name="custom-radio" onChange={() => {}} label="Label - radio" value='custom-radio-1' placeholder="Something goes here..." /> 
          <RadioCheck type="radio" name="custom-radio" onChange={() => {}} label="Label - radio" value='custom-radio-2' placeholder="Something goes here..." /> 
          <RadioCheck type="radio" name="custom-radio" onChange={() => {}} label="Label - radio" value='custom-radio-3' placeholder="Something goes here..." /> 
					</div>

					<fieldset className='form__section form__checkbox'>
						<legend>Legend - Description of Checkbox Options</legend>
						<div className='form__group'>
							<input type='checkbox' name='label-checkbox' onChange={() => {}} id='label-checkbox' checked />
							<label htmlFor='label-checkbox'>Label - Checkbox Checked</label>
						</div>

						<div className='form__group'>
							<input type='checkbox' name='label-checkbox' onChange={() => {}} id='label-checkbox-1' />
							<label htmlFor='label-checkbox-1'>Label - Checkbox 1</label>
						</div>
					</fieldset>

					<fieldset className='form__section'>
						<legend>Custom Checkbox</legend>
						<div className='form__group'>
							<input
								type='checkbox'
								name='custom-checkbox'
								id='custom-checkbox'
								onChange={() => {}}
								className='h-visual-hide input-custom-checkbox'
								checked
							/>
							<label htmlFor='custom-checkbox' className='label-custom-checkbox'>
								Custom Checkbox Checked
							</label>
						</div>

						<div className='form__group'>
							<input
								type='checkbox'
								name='custom-checkbox'
								id='custom-checkbox-1'
								onChange={() => {}}
								className='h-visual-hide input-custom-checkbox'
							/>
							<label htmlFor='custom-checkbox-1' className='label-custom-checkbox'>
								Custom Checkbox 1
							</label>
						</div>
					</fieldset>

					<div className='form__section'>
						<label htmlFor='label-select'>Label - Select</label>
						<select name='label-select' id='label-select'>
							<option value='Select 1'>Select 1</option>
							<option value='Select 2'>Select 2</option>
							<option value='Select 3'>Select 3</option>
						</select>
					</div>

					<div className='form__section'>
						<label htmlFor='label-textarea'>Label - Textarea</label>
						<textarea name='label-textarea' id='label-textarea' placeholder='Textarea' onChange={() => {}} />
					</div>

					<input type='submit' className='button' value='Submit' />
				</form>
			</div>

			<div>
				<h2 className='style-guide__heading'>Accordion</h2>
				<div className='faqs'>
					<details className='faqs__question'>
						<summary className='faqs__title'>Question Title 1</summary>
						<div className='faqs__content'>
							Are they away? They have just made the jump into hyperspace. You're sure the homing beacon
							is secure aboard their ship? I'm taking an awful risk, Vader. This had better work.
						</div>
					</details>

					<details className='faqs__question'>
						<summary className='faqs__title'>Question Title 2</summary>
						<div className='faqs__content'>
							Are they away? They have just made the jump into hyperspace. You're sure the homing beacon
							is secure aboard their ship? I'm taking an awful risk, Vader. This had better work.
						</div>
					</details>
				</div>
			</div>

			<div>
				<h2 className='style-guide__heading'>Images</h2>
				<p>
					<strong>Thumbnail (150x150)</strong>
				</p>
				<p>
					<img src='https://unsplash.it/150/150/?random' alt='' width='150' height='150' />
				</p>

				<p>
					<strong>Mobile (425x425)</strong>
				</p>
				<p>
					<img src='https://unsplash.it/425/425/?random' alt='' width='425' height='425' />
				</p>

				<p>
					<strong>Tablet (768x425)</strong>
				</p>
				<p>
					<img src='https://unsplash.it/768/425/?random' alt='' width='768' height='425' />
				</p>

				<p>
					<strong>Laptop (1024x768)</strong>
				</p>
				<p>
					<img src='https://unsplash.it/1024/768/?random' alt='' width='1024' height='768' />
				</p>

				<p>
					<strong>Desktop (1920x1080)</strong>
				</p>
				<p>
					<img src='https://unsplash.it/1920/1080/?random' alt='' width='1920' height='1080' />
				</p>
			</div>

			<div>
				<h2 className='style-guide__heading'>Video</h2>
				<iframe
					title="uniqueTitle"
					width='100%'
					height='500'
					src='https://www.youtube.com/embed/0evjtlI5QDY'
					frameBorder='0'
					allow='autoplay; encrypted-media'
					allowFullScreen
				/>
			</div>
		</div>
		<div>
			<h2 className='style-guide__heading'>Social Media</h2>

			<h2 className='style-guide__heading'>Search</h2>
		</div>
	</Layout>
);
