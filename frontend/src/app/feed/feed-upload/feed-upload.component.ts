import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api/api.service';

import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { FeedProviderService } from '../services/feed.provider.service';

import { LoadingController, ModalController } from '@ionic/angular';


@Component({
  selector: 'app-feed-upload',
  templateUrl: './feed-upload.component.html',
  styleUrls: ['./feed-upload.component.scss'],
})
export class FeedUploadComponent implements OnInit {
  previewDataUrl;
  file: File;
  uploadForm: FormGroup;

  constructor(
    private feed: FeedProviderService,
    private formBuilder: FormBuilder,
    private loadingController: LoadingController,
    private modalController: ModalController
  ) { }

  ngOnInit() {
    this.uploadForm = this.formBuilder.group({
      species: new FormControl('', Validators.required),
      diameter: new FormControl('', Validators.required),
      length: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required)
    });
  }

  setPreviewDataUrl(file: Blob) {
    const reader  = new FileReader();
    reader.onloadend = () => {
      this.previewDataUrl = reader.result;
    };

    reader.readAsDataURL(file);
  }

  selectImage(event) {
    const file = event.srcElement.files;

    if (!file) {
      return;
    }
    this.file = file[0];
    this.setPreviewDataUrl(this.file);

  }

  onSubmit($event) {
    $event.preventDefault();
    this.loadingController.create();

    if (!this.uploadForm.valid || !this.file) { return; }
    this.feed.uploadFeedItem(
          this.uploadForm.controls.species.value, 
          this.uploadForm.controls.diameter.value, 
          this.uploadForm.controls.length.value, 
          this.uploadForm.controls.price.value, 
          this.file)
      .then((result) => {
        this.modalController.dismiss();
        this.loadingController.dismiss();
      });
  }

  cancel() {
    this.modalController.dismiss();
  }
}
