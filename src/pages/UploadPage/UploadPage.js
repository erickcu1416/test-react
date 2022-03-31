/* eslint-disable array-callback-return */
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useDropzone } from 'react-dropzone';

const baseStyle = {
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	padding: '20px',
	borderWidth: 2,
	borderRadius: 2,
	borderColor: '#eeeeee',
	borderStyle: 'dashed',
	backgroundColor: '#fafafa',
	color: '#bdbdbd',
	transition: 'border .3s ease-in-out',
};

const activeStyle = {
	borderColor: '#2196f3',
};

const acceptStyle = {
	borderColor: '#00e676',
};

const rejectStyle = {
	borderColor: '#ff1744',
};

export const UploadPage = props => {
	const [files, setFiles] = useState([]);
	const [filesArray, setFilesArray] = useState([]);
	const [filePreview, setfilePreview] = useState([]);
	const [cont, setCont] = useState(0);

	const onPrevious = () => {
		const { id } = filePreview;
		if (id & (id > 1)) {
			const copyId = id;
			const newId = copyId - 1;
			const copyFilesArray = filesArray;
			const newFile = copyFilesArray.find(x => x.id === newId);
			if (newFile) {
				setfilePreview(newFile);
			}
		}
	};

	const onNext = () => {};

	const onDrop = useCallback(acceptedFiles => {
		setFiles(
			acceptedFiles.map(file =>
				Object.assign(file, {
					preview: URL.createObjectURL(file),
				})
			)
		);
		acceptedFiles.map(file => {
			const fac = filesArray;
			setfilePreview({ ...file, preview: URL.createObjectURL(file) });

			fac.push({ id: cont + 1, ...file });
			const cc = cont;
			setCont(cc + 1);
			setFilesArray(fac);
		});
	}, []);

	const {
		getRootProps,
		getInputProps,
		isDragActive,
		isDragAccept,
		isDragReject,
	} = useDropzone({
		onDrop,
		accept: 'image/jpeg, image/png',
	});

	const style = useMemo(
		() => ({
			...baseStyle,
			...(isDragActive ? activeStyle : {}),
			...(isDragAccept ? acceptStyle : {}),
			...(isDragReject ? rejectStyle : {}),
		}),
		[isDragActive, isDragReject, isDragAccept]
	);

	useEffect(
		() => () => {
			files.forEach(file => URL.revokeObjectURL(file.preview));
		},
		[files, filePreview]
	);

	return (
		<section className='mt-5'>
			<div className='container'>
				<div className='row'>
					<div className='col-5'>
						<div {...getRootProps({ style })}>
							<input {...getInputProps()} />
							<div>Drag and drop your images here.</div>
						</div>
					</div>
					<div className='col-7'>
						<div key={filePreview.name}>
							<img
								width={'500px'}
								src={filePreview.preview}
								alt={filePreview.name}
							/>
						</div>

						<nav aria-label='Page navigation example'>
							<ul className='pagination'>
								<li className='page-item'>
									<a className='page-link' onClick={() => onPrevious()}>
										Previous
									</a>
								</li>
								<li className='page-item'>
									<a className='page-link' href='#'>
										{filePreview.id || 0}
									</a>
								</li>
								<li className='page-item'>
									<a className='page-link' onClick={() => onNext()}>
										Next
									</a>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</div>
		</section>
	);
};
