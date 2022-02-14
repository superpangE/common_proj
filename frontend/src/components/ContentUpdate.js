import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "@material-tailwind/react";
import Send from "../config/Send";
import File from "../config/File";

function ContentUpdate(props) {
  // 태그
  let initialTags = [];
  if (props.content.tags) {
    initialTags = props.content.tags.split("|");
  } else {
    initialTags = [];
  }
  const [tag, setTag] = useState("");
  const [tags, setTags] = useState(initialTags);
  const onTagChange = (e) => setTag(e.target.value);
  const onSubmit = (e) => {
    if (e.charCode === 124) {
      e.preventDefault();
    } else if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      if (tag === "") {
        return;
      }
      if (tags.length < 10 && !tags.includes(tag)) {
        setTags((currentArray) => [...currentArray, tag]);
        setTag("");
      }
    }
  };
  const onRemoveTags = (index) => {
    setTags(tags.filter((tag, tagIndex) => index !== tagIndex));
  };

  // 태그 작성
  const putTags = (tags, contentSeq) => {
    const hashtag = tags;
    Send.put(`/content/tag/${props.content.contentSeq}`, JSON.stringify(hashtag));
  };

  // 모달
  const { isOpen, onCancel } = props;
  const handleClose = () => {
    onCancel();
  };

  // 게시글 수정
  const [imgFiles, setImgFiles] = useState([]);
  const [contentText, setContentText] = useState(props.content.contentText);
  const [isMedia, setIsMedia] = useState(props.content.contentIsMedia);
  const [isPublic, setIsPublic] = useState(props.content.contentIsPublic);
  const history = useHistory();
  const readImg = (input) => {
    if (input.files) {
      setImgFiles(input.files);
      // for (let i = 0; i < input.files.length; i++) {
      //   setImgFiles((currentArray) => [...currentArray, input.files[i]]);
      // }
    }
  };
  const handleTextChange = (e) => {
    setContentText(e.target.value);
  };
  const handleIsPublic = (e) => {
    setIsPublic(e.target.value);
    // console.log(e.target.value);
  };

  // const initialSetting = () => {
  //   contentText.setValue(props.content.contentText);
  //   isPublic.setValue(props.content.contentIsPublic);
  // };
  // useEffect(() => {
  //   initialSetting();
  // }, []);

  const putContent = () => {
    const formData = new FormData();
    for (let i = 0; i < imgFiles.length; i++) {
      formData.append("file", imgFiles[i]);
      setIsMedia(true);
    }
    const data = {
      contentIsMedia: isMedia,
      contentIsPublic: isPublic,
      contentSeq: props.content.contentSeq,
      contentText: contentText,
    };
    formData.append("sendContentModifyrequest", new Blob([JSON.stringify(data)], { type: "application/json" }));
    File.put("/content", formData).then((res) => {
      if (tags.length !== 0) {
        putTags(tags, res.data.content_seq);
      }
      history.push("/");
    });
  };

  return (
    <Modal size="regular" active={isOpen} toggler={() => handleClose(false)}>
      <ModalHeader className="text-center" toggler={() => handleClose(false)}>
        <span>게시글 작성</span>
        <select
          className="bg-white rounded-lg w-24 h-9 mx-3 p-2 text-xs border border-gray-300 outline-sky-500 text-black"
          value={isPublic}
          onChange={handleIsPublic}
        >
          <option className="rounded-lg h-10" value="true">
            공개
          </option>
          <option className="rounded-lg h-10" value="false">
            비공개
          </option>
        </select>
      </ModalHeader>
      <hr className="mb-5" />
      <ModalBody>
        <input
          type="text"
          placeholder="태그를 입력해주세요."
          className="bg-white rounded-lg w-94 h-9 mx-1 mb-3 p-2 text-xs border border-gray-300 outline-sky-500 text-black"
          maxLength="20"
          value={tag}
          onChange={onTagChange}
          onKeyPress={onSubmit}
        />
        <div className="bg-slate-100 h-9 rounded mb-1 h-fit flex flex-wrap items-center" style={{ width: 574 }}>
          {tags
            ? tags.map((item, id) => (
                <div className="m-1 px-2 rounded-md bg-purple-200 flex" key={id}>
                  {item}
                  <button className="material-icons text-sm ml-2 pt-0.5" onClick={() => onRemoveTags(id)}>
                    close
                  </button>
                </div>
              ))
            : null}
        </div>
        <textarea
          value={contentText}
          onChange={handleTextChange}
          className="bg-slate-100 rounded"
          name=""
          id=""
          cols="70"
          rows="10"
          placeholder="이 곳에 게시글을 작성해주세요."
        ></textarea>
        <div className="bg-slate-100 rounded mb-1 flex justify-between">
          <input id="upload-file" type="file" multiple="multiple" accept="image/*" onChange={(e) => readImg(e.target)} />
          {/* <Button color="red">파일삭제</Button> */}
        </div>
      </ModalBody>
      <ModalFooter>
        <Button
          color="lightBlue"
          ripple="light"
          onClick={() => {
            if (contentText) {
              putContent();
              handleClose(false);
            }
          }}
        >
          수정
        </Button>
      </ModalFooter>
    </Modal>
  );
}

function mapStateToProps(state) {
  return { characterSlice: state.character };
}

export default connect(mapStateToProps)(ContentUpdate);
